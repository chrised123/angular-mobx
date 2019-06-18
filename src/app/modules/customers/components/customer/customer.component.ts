import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
  @Input() customer: {};
  constructor() { }

  ngOnInit() {
  }

}
