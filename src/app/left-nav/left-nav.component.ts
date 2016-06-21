import { Component, OnInit } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
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
  navStatus="longLi";

  constructor(ns: NavigationService) {
    this.navItems = ns.getNavItems();
  }

  onClick(event) {
    this.navStatus= this.navStatus=="longLi" ? "shortLi" : "longLi";
  }

  ngOnInit() {
  }

}
