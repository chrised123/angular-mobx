import { CustomersRoutingModule } from './customers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomersViewState } from './store/view-states/customers.view-state';

@NgModule({
  declarations: [CustomersComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [
    CustomersViewState
  ]
})
export class CustomersModule { }
