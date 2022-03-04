import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'src/app/services/classroom/classroom.service';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.scss']
})
export class AllRoomsComponent implements OnInit {

  constructor(private classService: ClassroomService) { }

  ngOnInit(): void {
    this.allClassrooms()
  }

  allClassrooms() {
    this.classService.allClassrooms().subscribe(response => {
      console.log('response data', response.data);
    })
  }
}
