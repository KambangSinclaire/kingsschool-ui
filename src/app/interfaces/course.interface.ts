import { IBase } from "./base.interface";

export interface ICourse extends IBase{
    title: string;
    course_code:string;
    credit_value:string;
    description: string;
    learners: any[];
    assignments: any[];
    exams: any[];
    instructors: any[];
}