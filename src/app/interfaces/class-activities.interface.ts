import { IBase } from "./base.interface";

export interface IClassActivities extends IBase{
    name: string;
    description: string;
    objective: string;
    duration: string;
}