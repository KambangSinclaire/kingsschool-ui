import { IBase } from "./base.interface";
import { IUser } from "./user.interface";

export interface ILearner extends IBase, IUser {
    assignments: any[];
    activities: any[];
    courses: any[];
    exams: any[];
    messages: any[];
    notifications: any[];
    level: string;
    payments: any[];
    performanceStats: any;
    attendance: any[];
    timetable: any;
    fathersName:string,
    mothersName:string,
    guardian:string,
    contact_phone:string;
}