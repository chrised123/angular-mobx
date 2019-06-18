import { Component } from '@angular/core';
import { CoreDomainState } from './core/store/domain-states/core.domain-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    protected core: CoreDomainState
  ) {
    core = new CoreDomainState();
    console.log(core);
  }
  app = {
    title: 'Customer manager'
  }
}
