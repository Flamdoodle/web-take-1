import { Component, Input } from '@angular/core';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ContentComponent } from './content/content.component';

@Component({
  moduleId: module.id,
  selector: 'webstimate-app',
  templateUrl: 'webstimate.component.html',
  styleUrls: ['webstimate.component.css'],
  directives: [LeftNavComponent, ContentComponent]
})
export class WebstimateAppComponent {
  title = 'webstimate works!';
  isShowing;

  navItemClicked($event){
    console.log($event);
    this.isShowing = $event.currentlyShowing == "Scissors";
    console.log(this.isShowing);}
}
