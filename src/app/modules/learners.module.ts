import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLearnersComponent } from '../components/views/learners/all-learners/all-learners.component';
import { LearnerDetailsComponent } from '../components/views/learners/learner-details/learner-details.component';
import { UpdateLearnerComponent } from '../components/views/learners/update-learner/update-learner.component';



@NgModule({
  declarations: [
    AllLearnersComponent,
    LearnerDetailsComponent,
    UpdateLearnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LearnersModule { }
