import { Component } from '@angular/core';
import { Section } from './section'

@Component({
  selector: 'my-app',
  template: `
  <main-menu [sections]=sections> </main-menu>

  
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  sections = [
    new Section(0, 'Home'),
    new Section(1, 'Work'),
    new Section(2, 'Skills'),
    new Section(3, 'Experience'),
    new Section(4, 'About')
  ];

  mySection = this.sections[0];

}
