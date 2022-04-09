import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Cipher, LocalStore } from 'src/app/utils/localstore.utils';
import { IUser } from 'src/app/interfaces/user.interface';
import { AppStateManager } from 'src/app/state/app.state';
import { FileHandler } from 'src/app/utils/file-handler.utils';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private school: SchoolService,
    private router: Router,
    private formBuilder: FormBuilder,
    private fileUpload: FileHandler,
    private state: AppStateManager
  ) { }

  showLogin: boolean = false;
  selectedFile: string = "";
  user = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    remember: [""]
  });

  newUser = this.formBuilder.group({
    username: ["", Validators.required],
    first_name: [""],
    last_name: [""],
    phone_number: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    cpassword: ["", Validators.required],
    name: ["", Validators.required],
    address: ["", Validators.required],
    contact_email: ["", Validators.required],
    logo: ["not set"],
    contact_phone: ["", Validators.required],
    color: [""],
    profile_photo: [""],
    type: ["PRIMARY", Validators.required]
  });

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.user.value).subscribe((response) => {
      this.authActions(response)
    }
    )
  }

  createAccount() {
    // if (!this.newUser.invalid) {

    const payload: any = {
      "username": this.newUser.get('username')?.value,
      "phone_number": this.newUser.get('phone_number')?.value,
      "email": this.newUser.get('email')?.value,
      "password": this.newUser.get('password')?.value,
      "profile_photo": "Not set",
      "school": {
        "name": this.newUser.get('name')?.value,
        "address": this.newUser.get('address')?.value,
        "contact_email": this.newUser.get('contact_email')?.value,
        "logo": "Not set",
        "contact_phone": this.newUser.get('contact_phone')?.value,
        "description": this.newUser.get('description')?.value,
        "type": this.newUser.get('type')?.value
      }
    }
    this.auth.createAccount(payload).subscribe(userResponse => {

      // set these keys here to help with the file upload
      LocalStore.setItem('token', userResponse.data.refresh_token);
      LocalStore.setItem('x_api_key', userResponse.data.x_api_key);

      // file upload
      const formData = new FormData();
      formData.append('profile_photo', this.newUser.get('profile_photo')?.value);
      formData.append('logo', this.newUser.get('logo')?.value);

      this.fileUpload.manyFilesUpload(formData).subscribe(file => {

        const logo = file?.images.logo;
        const profile_photo = file?.images.profile_photo;

        // update the userData with the files uploaded
        userResponse.data.profile_photo = profile_photo;
        userResponse.data.school.logo = logo;

        // update school logo in the database
        this.school.editSchool(userResponse.data.school.id, { logo }).subscribe(school => {
          console.log("response", school);
        });

        // update admin profile photo in the database
        this.auth.editProfile(userResponse.data.id, { profile_photo }).subscribe(profile => {
          console.log("response", profile);
        })

        this.authActions(userResponse)
      });

    });
    // }
  }

  authActions(response: any) {
    const responseData: IUser = response.data;
    LocalStore.setItem('token', responseData.refresh_token);
    LocalStore.setItem('x_api_key', responseData.x_api_key);
    LocalStore.setItem('user', responseData);
    this.state.setUserState(responseData);
    this.router.navigate([ApiRoutes.dashboard.home], {
      queryParams: {
        [responseData?.userType ?? "admin"]: Cipher.encrypt(responseData?.id)
      }
    });
  }



  fileHandler(event: any) {
    const files = Array.from(event.target.files);
    this.newUser.get(event.target.name ?? 'profile_photo')?.setValue(files[0] as any);
    this.selectedFile = this.fileUpload.single(files)
  }

  ngOnDestroy() {
    URL.revokeObjectURL(this.selectedFile)
  }
}
