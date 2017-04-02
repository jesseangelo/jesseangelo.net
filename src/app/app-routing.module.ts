import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { TestComponent } from './test.component';

const appRoutes: Routes = [
  { path: 'work', component: TestComponent, data: { title: 'Work' } },
  { path: 'skills', component: TestComponent, data: { title: 'Skills' } },
  { path: 'experience', component: TestComponent, data: { title: 'Experience' } },
  { path: 'about', component: TestComponent, data: { title: 'About' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    TestComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
