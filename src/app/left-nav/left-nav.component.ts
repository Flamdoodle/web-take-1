import { Component, OnInit } from '@angular/core';
import { NavItemComponent } from '../nav-item';
import { NavigationService } from '../navigation.service';

@Component({
  moduleId: module.id,
  selector: 'app-left-nav',
  templateUrl: 'left-nav.component.html',
  styleUrls: ['left-nav.component.css'],
  directives: [NavItemComponent],
  providers: [NavigationService]
})
export class LeftNavComponent implements OnInit {
  navItems;
  constructor(ns: NavigationService) {
    this.navItems = ns.getNavItems();
  }

  ngOnInit() {
  }

}
