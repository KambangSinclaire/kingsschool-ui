import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from '../components/views/lecture/editor/editor.component';
import { AddLectureComponent } from '../components/views/lecture/add-lecture/add-lecture.component';
import { AllLecturesComponent } from '../components/views/lecture/all-lectures/all-lectures.component';
import { LectureBaseComponent } from '../components/views/lecture/lecture-base/lecture-base.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from '../app-routing.module';

const components = [
  EditorComponent,
  AddLectureComponent,
  AllLecturesComponent,
  LectureBaseComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    SharedModule,
    EditorModule,
    AppRoutingModule
  ],
  exports: [components]
})
export class LectureModule { }
