import { IBase } from "./base.interface";

export interface ILecture extends IBase {
    id: string;
    title: string;
    course: string;
    instructor: string;
    content: string;
    isDownloadable: boolean;
    has_assignments: boolean;
    has_quizzes: boolean;
    class_id: string;
    academic_year: string;
    color:string
}
