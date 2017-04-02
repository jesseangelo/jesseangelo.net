import { Component, Input } from '@angular/core';

@Component({
  selector: 'content',
  template: `<page-title [section]=section></page-title>
  This is content`,
})
export class ContentComponent {
  @Input() section: Section
}
