import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-sidebar',
  templateUrl: './primary-sidebar.component.html',
  styleUrls: ['./primary-sidebar.component.scss'],
  host: {
    class: 'sidebar'
  }
})
export class PrimarySidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
