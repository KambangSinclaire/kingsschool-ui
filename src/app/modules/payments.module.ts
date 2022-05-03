import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesComponent } from '../components/views/payments/fees/fees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';

const components = [
  FeesComponent
]

@NgModule({
  declarations: [
    components
  ],
  exports:[components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PaymentsModule { }
