import { IBase } from "./base.interface";

export interface IStatistics extends IBase {
    courses: any[];
    exams: any[];
    messages: any[];
    notifications: any[];
    active_class: string;
    payments: any[];
    activeAdmittedLearners: number;
    totalFeesPaid: number;
    all_learners: number;
    all_teachers: number;
    totalExpenditure: number;
    monthlyExpenditure: number;
    totalSalariesForInstructors: number;
    learner: {
        payments: {
            totalFeesPaid: number;
            feesPaid: number;
            balanceFees: number;
        },
        academics: {
            totalMarks: number;
            // totalMarksObtained:number;
            // totalMarksPercentage:number;
            // totalMarksPercentageObtained:number;
            // totalMarksPercentageRemaining:number;
            // totalMarksRemaining:number;

        }
    }

}