import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllLevelsComponent } from '../components/views/academicLevel/all-levels/all-levels.component';
import { AddLevelComponent } from '../components/views/academicLevel/add-level/add-level.component';
import { UpdateLevelComponent } from '../components/views/academicLevel/update-level/update-level.component';
import { LevelDetailsComponent } from '../components/views/academicLevel/level-details/level-details.component';



@NgModule({
  declarations: [
    AllLevelsComponent,
    AddLevelComponent,
    UpdateLevelComponent,
    LevelDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AcademicLevelModule { }
