import { Component, OnInit } from '@angular/core';
import { OrdersViewState } from './store/view-states/order.view-state';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {

  constructor(public viewState: OrdersViewState) { }

  ngOnInit() {
    console.log(JSON.parse(JSON.stringify(this.viewState.orders)));
  }

}
