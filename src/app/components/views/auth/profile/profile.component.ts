import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITeacher } from 'src/app/interfaces/teacher.interface';
import { IUser, UserType } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStore } from 'src/app/utils/localstore.utils';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(private activeRoute: ActivatedRoute, private authService: AuthService) { }

    user: Partial<ITeacher> = {};

    params: { role: string, id: string } = {
        role: '',
        id: ''
    };

    userTypes:Partial<UserType> = {}

    ngOnInit(): void {
        this.activeRoute.params.subscribe(params => {
            this.params.role = params['role'];
            this.params.id = params['id'];
        });

        this.getProfile()
    }


    getProfile(param?: { role: string, id: string }) {
        const user: IUser = LocalStore.getItem("user", {});
        const id = user.id ?? "";
        this.authService.getProfile(id).subscribe(res => {
            this.user = res.data;
        })
    }
}
