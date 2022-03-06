import { IBase } from "./base.interface";

export interface ICourse extends IBase{
    name: string;
    description: string;
    learners: any[];
    assignments: any[];
    exams: any[];
    instructors: any[];
}