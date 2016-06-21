import { Component } from '@angular/core';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';

@Component({
  moduleId: module.id,
  selector: 'webstimate-app',
  templateUrl: 'webstimate.component.html',
  styleUrls: ['webstimate.component.css'],
  directives: [LeftNavComponent, RightNavComponent]
})
export class WebstimateAppComponent {
  title = 'webstimate works!';
}
