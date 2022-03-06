import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let form: any = document.getElementById("login");
    form.addEventListener(
        "submit",
        function (event:any) {
            event.preventDefault();
            let elements = form.elements;
            let payload:any = {};
            for (let i = 0; i < elements.length; i++) {
                let item = elements.item(i);
                switch (item.type) {
                    case "checkbox":
                        payload[item.name] = item.checked;
                        break;
                    case "submit":
                        break;
                    default:
                        payload[item.name] = item.value;
                        break;
                }
            }
            // Place your API call here to submit your payload.
            // console.log('payload', payload);
        },
        true
    );
}
}
