import { Component, OnInit, SimpleChanges } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments/payments.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss']
})
export class FeesComponent implements OnInit {

  constructor(private paymentsService: PaymentsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.allpaymentss();
  }

  fees: [] = [];
  headings: string[] = [];


  formFields: any[] = [
    { field: 'first_name', type: 'text' },
    { field: 'username', type: 'text' },
    { field: 'last_name', type: 'text' },
    { field: 'email', type: 'text' },
    { field: 'address', type: 'text' },
    { field: 'state', type: 'text' },
    { field: 'gender', type: 'text' },
    { field: 'zipcode', type: 'number' },
    { field: 'city', type: 'text' },
    { field: 'country', type: 'text' },
    { field: 'profile_photo', type: 'file' }
  ];

  selectOptions: any[] = [{ label: 'INSTOCK', value: 'instock' }]
  options: any = { name: "payments", plural: 'paymentss' }

  ngOnInit(): void {
    this.allpaymentss()
  }

  allpaymentss() {
    this.paymentsService.allFees("").subscribe(response => {
      this.fees = response.data;
      this.headings = response.headings;
    });
  }

  createOrEdit(event: any) {
    if(event.edit){
      delete event.edit;
      this.paymentsService.editFee(event.id,event).subscribe(response => {
        this.allpaymentss();
      });
    }else{
      this.paymentsService.addFee(event).subscribe(response => {
        this.allpaymentss();
      });
    }
  }

  delete(event: any) {
    this.paymentsService.deleteFee(event?.id).subscribe(response => {
      this.allpaymentss();
    });
  }

}
