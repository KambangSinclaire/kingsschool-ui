import { IBase } from "./base.interface";

export interface IClassroom extends IBase {
    name: string;
    description: string;
    capacity:string;
    color:string,
    id:string,
    learners: any[];
    courses: any[];
    assignments: any[];
    activities: any[];
    exams: any[];
    instructors: any[];
}