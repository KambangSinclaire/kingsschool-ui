import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-inbox',
  templateUrl: './message-inbox.component.html',
  styleUrls: ['./message-inbox.component.scss']
})
export class MessageInboxComponent implements OnInit {

  constructor() { }

  messages = [{
    id: 1,
    sender: {
      id: 1,
      name: "John Doe",
      photo: "assets/images/avatars/avatar_1.png"
    },
    subject: "Hello Sir, I don't know what to say",
    },
    {
      id: 1,
      sender: {
        id: 1,
        name: "John Doe",
        photo: "assets/images/avatars/avatar_1.png"
      },
      subject: "Hello Sir, I don't know what to say",
      }]

  ngOnInit(): void {
  }

}
