import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-example-one',
  encapsulation: ViewEncapsulation.Emulated, // The default one
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent {}
