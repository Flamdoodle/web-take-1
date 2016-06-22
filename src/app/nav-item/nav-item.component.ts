import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-nav-item',
  templateUrl: 'nav-item.component.html',
  styleUrls: ['nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input() navLabel = '';
  @Input() glyphName = '';

  constructor() {}

  ngOnInit() {
  }

}
