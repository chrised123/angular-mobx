import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: 'list', component:  OrdersComponent},
  { path: '', redirectTo: 'list', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutingModule { }
