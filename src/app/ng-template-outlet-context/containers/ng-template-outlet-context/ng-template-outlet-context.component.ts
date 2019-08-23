import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-context',
  templateUrl: './ng-template-outlet-context.component.html',
  styleUrls: ['./ng-template-outlet-context.component.scss']
})
export class NgTemplateOutletContextComponent {
  ctx = {
    $implicit: 'Giorgio Federici',
    location: 'Rome, IT'
  };
}
