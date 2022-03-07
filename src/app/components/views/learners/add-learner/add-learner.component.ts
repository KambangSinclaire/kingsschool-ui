import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LearnersService } from 'src/app/services/learners/learners.service';

@Component({
  selector: 'app-add-learner',
  templateUrl: './add-learner.component.html',
  styleUrls: ['./add-learner.component.scss']
})
export class AddLearnerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private learnerService: LearnersService) { }

  learnerForm = this.formBuilder.group({
    first__name: ["", Validators.required],
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
  })

  ngOnInit(): void {
  }

  createLearner() {
    if (this.learnerForm.valid) {
      this.learnerForm.setControl('user_name',this.formBuilder.control('test2'));
      this.learnerForm.setControl('email',this.formBuilder.control('test2@gmail.com'))
      this.learnerForm.setControl('password',this.formBuilder.control('password2'))
      this.learnerService.addLearner(this.learnerForm.value).subscribe(response => {
        console.log("Response data", response);

      })
    }
  }
}
