import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-menu',
  template: `
    <a (click)="toggleMenu()">
      <img src='Jesse_logo_80x.png'>
    </a>

    <nav *ngIf="showMenu == true">
      <a routerLink="/work" routerLinkActive="active">Work</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/skills" routerLinkActive="active">Skills</a>
      <a routerLink="/experience" routerLinkActive="active">Experience</a>
    </nav>

  `,
})
export class MenuComponent {
  showMenu: boolean = true;

  toggleMenu() {
    this.showMenu = !this.showMenu;
    console.log("showMenu")
  }

  @Input() sections
}
