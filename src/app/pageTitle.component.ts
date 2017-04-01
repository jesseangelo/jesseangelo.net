import { Component } from '@angular/core';

@Component({
  selector: 'page-title',
  template: `<span>{{title}} This is a title</span>`,
})
export class PageTitleComponent  { title = "Work" }
