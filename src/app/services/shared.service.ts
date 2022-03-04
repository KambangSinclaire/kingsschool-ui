import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IAlert } from '../interfaces/alert.interface';
import { AlertStatus } from '../utils/response-status.utils';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private alertSubject = new BehaviorSubject<IAlert>({ message: "", details: "", status: AlertStatus.NONE });
  private alert: Partial<IAlert> = {};

  constructor() { }

  setAlert(data: IAlert) {
    this.alert = data;
    localStorage.setItem("alert", JSON.stringify(data))
  }

  showAlert() {
    try {
      const data = this.alert.details ? this.alert : JSON.parse(localStorage.getItem("alert") ?? "");
      this.alertSubject.next(data)
      return this.alertSubject;
    } catch (error) {
      this.alertSubject.next({
        message: undefined,
        status: undefined,
        details: undefined
      });
      return this.alertSubject;
    }
  }

  closeAlert(){
    localStorage.removeItem("alert");
    this.alertSubject.next({
      message: undefined,
      status: undefined,
      details: undefined
    });
    return this.alertSubject;
  }
}
