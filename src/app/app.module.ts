import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuComponent }  from './menu.component';
import { ContentComponent }  from './content.component';
import { PageTitleComponent }  from './pageTitle.component';

@NgModule({
  imports: [
    BrowserModule
    AppRoutingModule
  ],
  /* components, directives, and pipes here */
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    PageTitleComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
