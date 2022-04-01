import { IBase } from "./base.interface";

export interface IAcademicYear extends IBase {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    goals: any;
    activities: any;
    isActive: boolean;
    percentage: number;
    color: string;
}
