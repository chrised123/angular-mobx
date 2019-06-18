import { Component, OnInit, Input } from '@angular/core';
import { CustomerObject } from '../../store/view-models/customer.view-model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
  @Input() customer: CustomerObject;
  customerDetailUrl: string;
  customerOrdersUrl: string;
  constructor() { }

  ngOnInit() {
    this.customerDetailUrl = '/app/customer/id/' + this.customer.id;
    this.customerOrdersUrl = '/app/customer/id/' + this.customer.id;
  }

}
