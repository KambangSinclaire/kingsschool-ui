import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatroomService {

  constructor(private socket: Socket) {

    this.getMessageResponse();
   }

  private receicedMessage = new BehaviorSubject<any>({});

  sendMessage(msg: any) {
    this.socket.emit('group', msg);
  }

  getMessageResponse() {
    this.socket.on("response_message", (response: any) => {
      this.receicedMessage.next(response);
    })
  }

  getAllMessages() {
    return [];
  }

  getMessage() {
    return this.receicedMessage.asObservable();
  }
}
