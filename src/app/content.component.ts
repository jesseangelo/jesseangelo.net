import { Component, Input } from '@angular/core';

@Component({
  selector: 'content',
  template: `<page-title></page-title>
  This is content`,
})
export class ContentComponent {
  @Input() section: Section
}
