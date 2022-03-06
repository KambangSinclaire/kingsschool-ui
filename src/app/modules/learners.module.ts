import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLearnersComponent } from '../components/views/learners/all-learners/all-learners.component';
import { LearnerDetailsComponent } from '../components/views/learners/learner-details/learner-details.component';
import { UpdateLearnerComponent } from '../components/views/learners/update-learner/update-learner.component';
import { AddLearnerComponent } from '../components/views/learners/add-learner/add-learner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllLearnersComponent,
    LearnerDetailsComponent,
    UpdateLearnerComponent,
    AddLearnerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})
export class LearnersModule { }
