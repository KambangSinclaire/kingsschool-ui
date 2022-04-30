import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from '../components/views/lecture/editor/editor.component';
import { AddLectureComponent } from '../components/views/lecture/add-lecture/add-lecture.component';
import { AllLecturesComponent } from '../components/views/lecture/all-lectures/all-lectures.component';
import { LectureBaseComponent } from '../components/views/lecture/lecture-base/lecture-base.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    AppRoutingModule
  ],
  exports: [components],
  providers:[
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class LectureModule { }
