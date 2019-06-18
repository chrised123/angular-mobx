import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'customer', loadChildren: '../modules/customers/customers.module#CustomersModule' },
  { path: 'orders', loadChildren: '../modules/orders/orders.module#OrdersModule' },
  { path: '', redirectTo: 'customer', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
