import { Component, DoCheck, Input, OnInit } from '@angular/core';
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
  constructor(private sharedService: SharedService) { }

  ngDoCheck(): void {
    this.checkAlert();
  }

  ngOnInit(): void { }

  closeAlert() {
    this.sharedService.closeAlert().subscribe(response => {
      this.showAlert = false;
    });
  }

  checkAlert() {
    // if (this.showAlert) {
    this.sharedService.showAlert().subscribe((data) => {
      if (data.status) {
        this.showAlert = true;
        this.alert.message = data?.message;
        this.alert.details = data?.details
        this.alert.status = data?.status
      } else {
        this.showAlert = false;
      }
    });
    // }
  }

}
