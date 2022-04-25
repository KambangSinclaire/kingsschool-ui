import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ILearner } from 'src/app/interfaces/learner.interface';
import { LearnersService } from 'src/app/services/learners/learners.service';

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

  options: any = { name: "learner", plural: 'learners' }

  constructor(private learnersService: LearnersService) { }


  ngOnInit(): void {
    this.allLearners();
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
}
