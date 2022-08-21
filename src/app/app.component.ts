import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TodoMVC';
  placeholder ='What needs to be done actually???';
  constructor() { }
  ngOnInit() { }
}
