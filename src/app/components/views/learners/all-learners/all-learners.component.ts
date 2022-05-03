import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ILearner } from 'src/app/interfaces/learner.interface';
import { AcademicLevelsService } from 'src/app/services/AcademicLevels/academic-levels.service';
import { LearnersService } from 'src/app/services/learners/learners.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-all-learners',
  templateUrl: './all-learners.component.html',
  styleUrls: ['./all-learners.component.scss']
})
export class AllLearnersComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    this.allLearners();
  }

  learners: ILearner[] = [];;
  headings: string[] = [];
  academicLevels: any[] = [];

  formFields: any[] = [
    { field: 'first_name', type: 'text' },
    { field: 'username', type: 'text' },
    { field: 'last_name', type: 'text' },
    { field: 'email', type: 'text' },
    { field: 'phone', type: 'number' },
    { field: 'address', type: 'text' },
    { field: 'gender', type: 'text' },
    { field: 'academic_level', type: 'select' },
    { field: 'place_of_birth', type: 'date' },
    { field: 'date_of_birth', type: 'date' },
    { field: 'fathers_name', type: 'text' },
    { field: 'mothers_name', type: 'text' },
    { field: 'fathers_phone', type: 'number' },
    { field: 'mothers_phone', type: 'number' },
    { field: 'guardians_name', type: 'text' },
    { field: 'guardians_phone', type: 'number' },
    { field: 'guardians_address', type: 'text' },
    { field: 'profile_photo', type: 'file' }
  ];

  selectOptions: any[] = [{ label: 'INSTOCK', value: 'instock' }]

  options: any = {
    name: "learner",
    plural: 'learners',
    permissions: {
      add: ApiRoutes.api.learner.add,
      edit: ApiRoutes.api.learner.edit,
      delete: ApiRoutes.api.learner.delete,
      view: ApiRoutes.api.learner.retrieveSingle,
      viewAll: ApiRoutes.api.learner.retrieveSingle
    }
  }

  constructor(private learnersService: LearnersService, private academicLevelService: AcademicLevelsService,) { }


  ngOnInit(): void {
    this.allLearners();
    this.getAcademicLevels()
  }

  allLearners() {
    this.learnersService.allLearners("").subscribe(response => {
      this.learners = response.data;
      this.headings = response.headings;
    });
  }

  createOrEdit(event: any) {
    console.log(event);
    if (event.edit) {
      delete event.edit;
      this.learnersService.deleteLearner(event.id).subscribe(response => {
        this.allLearners();
      });
    } else {
      this.learnersService.addLearner(event).subscribe(response => {
        this.allLearners();
      });
    }
  }

  delete(event: any) {
    this.learnersService.deleteLearner(event?.id).subscribe(response => {
      this.allLearners();
    });
  }

  getAcademicLevels() {
    this.academicLevelService.allAcademicLevels("").subscribe(response => {
      this.academicLevels = response.data.map((level: any) => { return { id: level.id, label: level?.name } });
      this.selectOptions = this.academicLevels;
    });
  }
}
