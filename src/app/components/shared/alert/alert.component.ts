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

  public closeModal() {
    let Notification = document.getElementById("notification");
    Notification!.style.transform = "translateX(150%)";
  }

  alertp:boolean=false
 
  closeAlert2() {
    this.alertp=!this.alert
}

  ngOnInit(): void {
    if (this.alert.status && this.showAlert) {
      let Notification = document.getElementById("notification");
      Notification!.style.transform = "translateX(150%)";
      Notification!.classList.remove("hidden");
      setTimeout(function () {
        Notification!.style.transform = "translateX(0%)";
      }, 1000);
    }
  }

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
        this.alert.status = data?.status,
        this.alert.color = data?.color
      } else {
        this.showAlert = false;
      }
    });
    // }
  }

}
