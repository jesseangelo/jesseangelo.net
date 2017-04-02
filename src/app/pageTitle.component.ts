import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  template: `<h1>{{section.name}}</h1>`,
})
export class PageTitleComponent  {
  @Input() section: Section
}
