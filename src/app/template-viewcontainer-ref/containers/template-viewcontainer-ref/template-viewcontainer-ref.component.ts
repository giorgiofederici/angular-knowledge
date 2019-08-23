import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterContentInit,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-template-viewcontainer-ref',
  templateUrl: './template-viewcontainer-ref.component.html',
  styleUrls: ['./template-viewcontainer-ref.component.scss']
})
export class TemplateViewContainerRefComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;

  @ViewChild('tmpl', { static: true }) tmpl: TemplateRef<any>;

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl);
  }
}
