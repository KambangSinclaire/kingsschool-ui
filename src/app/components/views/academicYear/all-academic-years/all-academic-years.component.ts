import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IAcademicYear } from 'src/app/interfaces/academic-year.interface';
import { AcademicYearsService } from 'src/app/services/AcademicYears/academic-years.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';


@Component({
  selector: 'app-all-academic-years',
  templateUrl: './all-academic-years.component.html',
  styleUrls: ['./all-academic-years.component.scss']
})
export class AllAcademicYearsComponent implements OnInit {
  classrooms: any;

  constructor(private academicYearService: AcademicYearsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAcademicYears();
  }

  academicYears: IAcademicYear[] = [];

  headings: string[] = [];

  formFields: any[] = [
    { field: 'name', type: 'text' },
    { field: 'description', type: 'textarea' },
    { field: 'startDate', type: 'date' },
    { field: 'endDate', type: 'date' },
    { field: 'color', type: 'color' },
    { field: 'is_active', type: 'radio' },
    { field: 'objectives', type: 'select' },
  ];


  selectOptions: any[] = [{ label: 'Increase Registrations', value: '1' },
  { label: 'Increase Salaries', value: '2' },
  { label: 'Build staff quaters', value: '3' }]

  options: any = { 
    name: "school year",
     plural: 'school years',
     permissions: {
      add: ApiRoutes.api.academicYear.add,
      edit: ApiRoutes.api.academicYear.edit,
      delete: ApiRoutes.api.academicYear.delete,
      view: ApiRoutes.api.academicYear.retrieveSingle,
      viewAll: ApiRoutes.api.academicYear.retrieveSingle
    }
     }

  ngOnInit(): void {
    this.getAcademicYears();
  }

  createOrEdit(event: any) {
    if (event.edit) {
      delete event.edit;
      this.academicYearService.editAcademicYear(event.id, event).subscribe(response => {
        this.getAcademicYears();
      });
    } else {
      this.academicYearService.addAcademicYear(event).subscribe(response => {
        this.getAcademicYears();
      });
    }
  }

  delete(event: any) {
    this.academicYearService.deleteAcademicYear(event?.id).subscribe(response => {
      this.getAcademicYears();
    });
  }


  getAcademicYears() {
    this.academicYearService.allAcademicYears("").subscribe(response => {
      this.classrooms = response.data;
      this.headings = response.headings;
    })
  }

}
