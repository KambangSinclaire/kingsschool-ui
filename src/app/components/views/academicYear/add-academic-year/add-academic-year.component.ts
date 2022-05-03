import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcademicYearsService } from 'src/app/services/AcademicYears/academic-years.service';

@Component({
  selector: 'app-add-academic-year',
  templateUrl: './add-academic-year.component.html',
  styleUrls: ['./add-academic-year.component.scss']
})
export class AddAcademicYearComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private academicYearService: AcademicYearsService) { }

  academicYearForm = this.formBuilder.group({
    name: ["", Validators.required],
    startDate: ["", Validators.required],
    endDate: ["", Validators.required],
    color: ["", Validators.required],
    is_active: [false],
    description: [""],
    objectives: [""],
  });

  ngOnInit(): void {
  }
  createAcademicYear() {
    if (this.academicYearForm.valid) {
      this.academicYearService.addAcademicYear(this.academicYearForm.value).subscribe(response => {
        console.log('Response', response);
      })
    }

  }
}
