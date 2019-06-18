import { Component, OnInit } from '@angular/core';
import { CustomersViewState } from './store/view-states/customers.view-state';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
  constructor(public viewState: CustomersViewState) { }

  ngOnInit() {
  }

}
