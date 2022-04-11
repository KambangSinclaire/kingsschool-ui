import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  // height: number = 0;
  // toolbar: string[] = []
  // menubar: boolean = true;
  // plugins: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  saveOO(){
    console.log('saveOO')
  }
}
