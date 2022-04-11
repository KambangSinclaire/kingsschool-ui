import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IAlert } from "../interfaces/alert.interface";
import { IUser } from "../interfaces/user.interface";
import { LocalStore } from "../utils/localstore.utils";
import { IStatistics } from "../interfaces/statistics.interface"

@Injectable({
  providedIn: 'root'
})

export class AppStateManager {

  private alert = new BehaviorSubject<IAlert>({});

  private user = LocalStore.getItem("user", {});
  private loggedInUser = new BehaviorSubject<Partial<IUser>>(this.user ?? {});

  private stats = LocalStore.getItem("stats", {});
  private statistics = new BehaviorSubject<Partial<IStatistics>>(this.stats ?? {});

  private loader = new BehaviorSubject<boolean>(false);


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

  setStatistics(payload: IStatistics) {
    this.statistics.next(payload);
  }

  getStatistics() {
    return this.statistics.asObservable();
  }

  setLoader(value: boolean) {
    this.loader.next(value);
  }

  getLoader() {
    return this.loader.asObservable();
  }
}
