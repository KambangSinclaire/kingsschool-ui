import { IAcademicYear } from "./academic-year.interface";
import { ISchool } from "./school.interface";

export interface IUser {
    username?: string;
    email?: string;
    password?: string;
    id?: string;
    sign_in_type: string;
    last_login: string;
    last_login_Ip: string;
    last_login_location: string;
    first_name: string;
    last_name: string;
    phone_number: string,
    address: string,
    about: string;
    gender: string;
    status: string;
    role: any;
    refresh_token: string;
    permissions: string[]
    userType: string;
    app_user_Id: any;
    x_api_key: string;
    academic_year: IAcademicYear;
    remember?: boolean,
    profile_photo: string,
    school: ISchool;
    date_of_birth: string;
}

export type UserType = {
    admin: "ADMIN",
    teacher: "STAFF",
    learner: "LEARNER"
}

export enum UserRole {
    admin = "ADMIN",
    learner = "LEARNER",
    staff = "STAFF",
    admin_staff = "ADMINSTAFF",
    super_admin = "SUPERADMIN"
};