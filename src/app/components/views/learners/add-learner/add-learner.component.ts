import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LearnersService } from 'src/app/services/learners/learners.service';
import { FileHandler } from 'src/app/utils/file-handler.utils';

@Component({
  selector: 'app-add-learner',
  templateUrl: './add-learner.component.html',
  styleUrls: ['./add-learner.component.scss']
})
export class AddLearnerComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private learnerService: LearnersService,
    private fileUpload: FileHandler) { }

  learnerForm = this.formBuilder.group({
    first_name: ["", Validators.required],
    last_name: ["", Validators.required],
    gender: ["", Validators.required],
    academic_level: ["", Validators.required],
    place_of_birth: ["", Validators.required],
    date_of_birth: ["", Validators.required],
    fathers_name: ["", Validators.required],
    mothers_name: ["", Validators.required],
    fathers_phone: ["", Validators.required],
    mothers_phone: ["", Validators.required],
    guardians_name: ["", Validators.required],
    guardians_email: ["", Validators.required],
    guardians_phone: ["", Validators.required],
    guardians_address: ["", Validators.required],
    profile_photo: [""]
  });

  selectedFile: string = "";

  ngOnInit(): void {
  }

  createLearner() {
    if (this.learnerForm.valid) {

      // dynamically added forms
      this.learnerForm.setControl('username', this.formBuilder.control(this.learnerForm.get('first_name')?.value));
      this.learnerForm.setControl('email', this.formBuilder.control(this.learnerForm.get('guardians_email')?.value))
      this.learnerForm.setControl('password', this.formBuilder.control('password2'))

      // for file upload
      const formData = new FormData();
      formData.append('file', this.learnerForm.get('profile_photo')?.value);
      this.fileUpload.fileUpload(formData).subscribe(file => {

        this.learnerForm.patchValue({ 'profile_photo': file?.image });

        //upload learner data
        this.learnerService.addLearner(this.learnerForm.value).subscribe(response => {
          console.log("Response data", response);
        });

      }, (error) => {
        console.log('Error occured');

      });
    }
  }

  fileHandler(event: any) {
    const files = Array.from(event.target.files);
    this.learnerForm.get('profile_photo')?.setValue(files[0] as any);
    this.selectedFile = this.fileUpload.single(files)
  }

  ngOnDestroy() {
    URL.revokeObjectURL(this.selectedFile)
  }
}
