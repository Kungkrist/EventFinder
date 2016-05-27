import {Component, OnInit, Inject, Injector} from 'angular2/core';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {MyCommentComponent} from '../my-comment';
import {RouteData, RouteParams, OnActivate, ComponentInstruction, CanActivate} from 'angular2/router';
import {Http} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {MyEventsService} from '../my-events.service';
import {MyUsersService} from '../my-users.service';

@Component({
  moduleId: __moduleName,
  selector: 'my-show-detailsview',
  templateUrl: 'my-show-detailsview.component.html',
  styleUrls: ['my-show-detailsview.component.css'],
  directives: [MyCommentComponent],
  inputs: ['uid'],
  providers: [MyEventsService, MyUsersService]
})
//@CanActivate(() => tokenNotExpired())
export class MyShowDetailsviewComponent implements OnInit {

  constructor(@Inject(FirebaseRef) public ref: Firebase, public myUsersService: MyUsersService, public myEventsService: MyEventsService, public data: RouteData, public injector: Injector, public params: RouteParams, private router: Router) {
  }
  
  event = {};
  
  //FirebaseObjectObservable<Event>
  
  //public name = "Placeholder, change to data from db"
  eventId;
  
  ngOnInit() {
    // Get uid from sender
    console.log("inside detailview");
    this.params = this.injector.parent.get(RouteParams);
    this.eventId = this.params.get('uid');
    
    this.myEventsService.getEvent(this.eventId).then(result => {
     console.log("list");
     this.event = result;
   });
  }

  
  onClick(id){
    this.router.navigate(['/My-detailview', { uid: id }]);
    return false;
  }
  
  // Check if the user is allowed to edit a specified event.
  isValid() {
    try {
      if(this.event["uid"].includes(this.myUsersService.loggedInUserId))
        return true;      
    }catch(e) {      
      return false;
    }
  }
  
  
}
