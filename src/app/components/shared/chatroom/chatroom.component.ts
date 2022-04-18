import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Peer from 'peerjs';
import { Observable } from 'rxjs';
import { ChatroomService } from 'src/app/services/chatroom/chatroom.service';
import { LocalStore } from 'src/app/utils/localstore.utils';
const peer = new Peer(`${Date.now()}`, {
  host: 'localhost',
  port: 9000,
  path: '/testApp'
});

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit, OnChanges {

  constructor(private chatService: ChatroomService) {
    // get messages in realtime
    this.chatService.getMessage().subscribe((data) => {
      this.messages.push(data);
    });
  }

  myActiveID: number = LocalStore.getItem("user", {}).id;

  messages: any = [];

  ngOnChanges(changes: SimpleChanges): void { }

  myID = peer.id;
  peerId = '';
  message = '';
  messageRecieved = this.chatService.getMessage();
  connection!: Peer.DataConnection;
  isConnected: boolean = false;

  newMessaage: any = this.chatService.getMessage();


  ngOnInit(): void {
    let that = this;
    peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        that.connection = conn;
        console.log("Peer connected", conn.peer);
        this.peerId = conn.peer;
        that.messageRecieved = data;
      });
    });
  }

  connect() {
    let connection = peer.connect(this.peerId);
    this.connection = connection;
    connection.on('open', function () {
      connection.send('Testing things out');
    });
  }

  sendMessage() {
    let message = {
      id: Date.now(),
      message: this.message,
      sender: this.myActiveID,
      time: new Date(Date.now()),
      type: 'text'
    };
    this.connection.send(message);
    this.messages.push(message);
  }

  call() {
    var getUserMedia = (navigator as any).getUserMedia || (navigator as any).webkitGetUserMedia || (navigator as any).mozGetUserMedia;

    const that = this;

    getUserMedia({ video: true, audio: true }, function (stream: MediaStream) {
      var call = peer.call(that.peerId, stream);
      call.on('stream', function (remoteStream) {
        // Show stream in some video/canvas element.
        console.log("Remote stream", remoteStream);
      });
    }, function (err: any) {
      console.log('Failed to get local stream', err);
    });
  }

  answer() {
    var getUserMedia = (navigator as any).getUserMedia || (navigator as any).webkitGetUserMedia || (navigator as any).mozGetUserMedia;
    peer.on('call', function (call) {
      getUserMedia({ video: true, audio: true }, function (stream: MediaStream | undefined) {
        call.answer(stream); // Answer the call with an A/V stream.
        call.on('stream', function (remoteStream) {
          // Show stream in some video/canvas element.
          console.log("Remote Call Answering stream", remoteStream);

        });
      }, function (err: any) {
        console.log('Failed to get local stream', err);
      });
    });
  }


  // get messages
  // getMessages() {
  //   this.chatService.getMessage()
  // }

  // send messages
  sendSocketMessage() {
    let message = {
      id: Date.now(),
      message: this.message,
      sender: LocalStore.getItem("user", {}),
      time: new Date(Date.now()),
      type: 'text'
    };
    this.messages.push(message);
    this.chatService.sendMessage(message);
  }

  isTyping(event: any) {
    // this.chatService.isTyping();
  }

  enter(event: any) {
    // this.chatService.enter();
  }
}
