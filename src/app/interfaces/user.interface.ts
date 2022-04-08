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
    phone_number:string,
    address:string,
    about: string;
    gender: string;
    status: string;
    role: any;
    refresh_token: string;
    permissions: string[]
    userType: string;
    app_user_Id: any;
    x_api_key: string;
    academic_year:string;
    remember?: boolean,
    profile_photo:string,
    school_id:string;
}