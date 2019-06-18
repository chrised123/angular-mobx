import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersViewState } from '../../store/view-states/customers.view-state';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CustomerObject } from '../../store/view-models/customer.view-model';
import { DomSanitizer } from '@angular/platform-browser';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html'
})
export class CustomerDetailComponent implements OnInit {
  private routeSub: Subscription;
  public customer: CustomerObject;
  public mapsQuery: string;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  constructor(public viewState: CustomersViewState, private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.customer = this.viewState.getDetails(params['id']);
    });

    this.route.fragment.subscribe((fragment: string) => {
      if (fragment === 'orders'){
        this.selectTab(1);
      }
    });

  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  generateUrl = (address) => {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/search?q=' +
    address.addressLine1 + ' ' +
    address.addressLine2 + ' ' +
    address.city + ' ' +
    address.country +
    '&key=AIzaSyCOYH-OO8FqnGppj7PVyP7L1FYvN6R8Ri4');
  }

}
