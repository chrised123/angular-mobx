import { Injectable, TemplateRef } from '@angular/core';
import { autorun, observable, action, reaction } from 'mobx';
import { CustomersDummy } from '../data/customers.dummy';
@Injectable()
export class CustomersViewState {
  @observable customers: CustomersDummy;

  constructor(
  ) {
    autorun(
      (autorunReaction) => {
        this.customers = new CustomersDummy();
        autorunReaction.dispose();
      }
    );
  }

  getDetails = (id) => {
    const filter = this.customers.list.filter(item => {
      return item.id == id;
    });
    return filter[0]
  }
}
