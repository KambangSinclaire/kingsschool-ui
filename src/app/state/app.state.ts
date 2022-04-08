import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IAlert } from "../interfaces/alert.interface";
import { IUser } from "../interfaces/user.interface";
import { LocalStore } from "../utils/localstore.utils";

@Injectable({
  providedIn: 'root'
})

export class AppStateManager {

  private user = LocalStore.getItem("user", {});
  private alert = new BehaviorSubject<IAlert>({})
  private loggedInUser = new BehaviorSubject<Partial<IUser>>(this.user ?? {});

  constructor() { }

  setUserState(user: IUser) {
    this.loggedInUser.next(user);
  }

  getUserState() {
    return this.loggedInUser.asObservable();
  }

  setAlertState(alert: IAlert) {
    this.alert.next(alert);
  }

  getAlertState() {
    return this.alert.asObservable();
  }
}
