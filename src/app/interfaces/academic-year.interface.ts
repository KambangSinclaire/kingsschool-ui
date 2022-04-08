import { IBase } from "./base.interface";

export interface IAcademicYear extends IBase {
    name: string;
    id:string;
    description: string;
    startDate: string;
    endDate: string;
    goals: any;
    activities: any;
    is_active: boolean;
    percentage: number;
    color: string;
}
