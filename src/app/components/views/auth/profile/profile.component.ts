import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStore } from 'src/app/utils/localstore.utils';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(private activeRoute: ActivatedRoute, private authService: AuthService) { }

    params: { role: string, id: string } = {
        role: '',
        id: ''
    };

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
            console.log(res);
        })
    }
}
