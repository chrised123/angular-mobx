import { CustomersRoutingModule } from './customers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomersViewState } from './store/view-states/customers.view-state';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { TabsModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [CustomersComponent, CustomerComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    TabsModule.forRoot()
  ],
  providers: [
    CustomersViewState
  ]
})
export class CustomersModule { }
