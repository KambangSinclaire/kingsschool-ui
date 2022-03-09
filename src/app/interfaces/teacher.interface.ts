import { IBase } from "./base.interface";
import { IUser } from "./user.interface";

export interface ITeacher extends IBase, IUser {
    assignments: any[];
    activities: any[];
    courses: any[];
    exams: any[];
    messages: any[];
    notifications: any[];
    active_class: string;
    payments: any[];
    performanceStats: any;
    attendance: any[];
    timetable: any;
    profile_photo: string;
    cv: string;
    ratings: any[];
    follows: any[];
    tutorials: any[]
}