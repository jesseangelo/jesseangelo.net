import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ContentComponent } from './content.component';

const appRoutes: Routes = [
  { path: 'work', component: ContentComponent, data: { title: 'Work' } },
  { path: 'skills', component: ContentComponent, data: { title: 'Skills' } },
  { path: 'experience', component: ContentComponent, data: { title: 'Experience' } },
  { path: 'about', component: ContentComponent, data: { title: 'About' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
