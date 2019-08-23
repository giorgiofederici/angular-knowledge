import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterContentInit,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-template-context',
  templateUrl: './template-context.component.html',
  styleUrls: ['./template-context.component.scss']
})
export class TemplateContextComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;

  @ViewChild('tmpl', { static: true }) tmpl: TemplateRef<any>;

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Giorgio Federici',
      location: 'Rome, IT'
    });
  }
}
