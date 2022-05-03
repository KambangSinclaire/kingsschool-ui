import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LecturesService } from 'src/app/services/lectures/lectures.service';
import { TinyMCE } from 'tinymce';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private lectureService: LecturesService) { }

  tinyInit: any;
  lectureForm = this.formBuilder.group({
    title: [''],
    description: [''],
    content: [''],
    rawData: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngOnInit(): void {
    this.tinyInit = {
      base_url: '/tinymce',
      height: 1000,
      menubar: true,
      output: 'text',
      save_enablewhendirty: true,
      theme_advanced_buttons3_add: 'save',
      save_onsavecallback: this.saveLecture.bind(this),
      branding: false,
      plugins: [
        'advlist autolink lists checklist link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen', 'autosave', 'save',
        'insertdatetime media table save contextmenu paste code help wordcount'
      ],
      toolbar:
        'undo redo | formatselect | bold italic backcolor | \
         alignleft aligncenter alignright alignjustify | \
         bullist numlist outdent indent | removeformat | help | restoredraft | save | preview | insertfile | styleselect | link image | checklist',
      suffix: '.min'
    }
  }
  saveLecture(editor: any) {
    console.log(editor.getContent());
    if (this.lectureForm.valid) {
      console.log('saved Lecture', this.lectureForm.value);
      this.lectureService.addLecture(this.lectureForm.value).subscribe(res => {
        console.log('response', res);
      }
      );
    }
  }
}
