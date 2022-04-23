import { Component, DoCheck, ElementRef, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IAlert } from 'src/app/interfaces/alert.interface';
import { SharedService } from 'src/app/services/shared.service';
import { AlertStatus } from 'src/app/utils/response-status.utils';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, DoCheck {

  alert: IAlert = {
    message: undefined,
    status: undefined,
    details: undefined
  }
  showAlert: boolean = true;
  display:boolean = false;
  constructor(private sharedService: SharedService,private messageService: MessageService) { }

  ngDoCheck(): void {
    this.checkAlert()
  }


  ngOnInit(): void {
  
  }


  checkAlert() {
    this.sharedService.showAlert().subscribe((data) => {
      // this.messageService.add({ severity: data?.status?.toLocaleLowerCase(), summary: data?.message, detail: data?.details, life: 3000 });
      this.showAlert = true;
      if (data.status) {
        this.display = true
        this.alert.message = data?.message;
        this.alert.details = data?.details
        this.alert.status = data?.status,
          this.alert.color = data?.color
      }
    });
  }

}
