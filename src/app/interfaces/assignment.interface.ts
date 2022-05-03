import { IBase } from "./base.interface";

export interface IAssignment extends IBase {
    name: string;
    description: string;
    objective:string;
    classroom: any[];
    course: string;
    attachments: any[];
    instructors: any[];
}