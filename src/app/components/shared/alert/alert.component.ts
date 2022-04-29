import { Component, DoCheck, ElementRef, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IAlert } from 'src/app/interfaces/alert.interface';
import { SharedService } from 'src/app/services/shared.service';
import { AppStateManager } from 'src/app/state/app.state';
import { AlertStatus } from 'src/app/utils/response-status.utils';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(private sharedService: SharedService, private messageService: MessageService, private state: AppStateManager) {
    state.getAlertState().subscribe(alert => {
      this.messageService.add({ severity: alert?.status?.toLocaleLowerCase(), summary: alert?.message, detail: alert?.details, life: 10000 });
    });
  }
  ngOnInit(): void { }
}
