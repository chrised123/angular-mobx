import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';

const routes: Routes = [
  { path: 'list', component:  CustomersComponent},
  { path: 'id/:id', component:  CustomerDetailComponent},
  { path: '', redirectTo: 'list', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomersRoutingModule { }
