import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-menu',
  template: `
    <a (click)="toggleMenu()">
      <img src='Jesse_logo_80x.png'>
    </a>

    <ul>
      <li *ngFor="let section of sections">
        <a (click)="selectSection(section.id)" >{{ section.name }}</a>
      </li>
    </ul>

  `,
})
export class MenuComponent {
  toggleMenu() {
    console.log('clicked');
  }

  selectSection(id) {
    console.log('id clicked: ' + id);
  }

  @Input() sections
}
