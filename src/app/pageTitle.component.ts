import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-title',
  template: `<h1>{{title}}</h1>`,
})
export class PageTitleComponent implements OnInit {
  title: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.title = this.route.snapshot.data['title']
  }
}
