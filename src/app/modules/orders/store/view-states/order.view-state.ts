import { Injectable, TemplateRef } from '@angular/core';
import { autorun, observable, action, reaction } from 'mobx';
import { CustomersDummy } from '../../../customers/store/data/customers.dummy';
import { CustomerOrder } from '../view-models/customer-order.view-model';
@Injectable()
export class OrdersViewState {
  @observable orders: CustomerOrder[];

  constructor(
  ) {
    autorun(
      (autorunReaction) => {
        const customers = new CustomersDummy();
        let customerOrders = [];
        customers.list.map(customer => {
          let ordersWithUsers = customer.orders.map(order => {
            return new CustomerOrder(order, customer.name, customer.id, customer.image);
          });
          customerOrders.push(...ordersWithUsers);
        });
        this.orders = customerOrders;
        autorunReaction.dispose();
      }
    );
  }
}
