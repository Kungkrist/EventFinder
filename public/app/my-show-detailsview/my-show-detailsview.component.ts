import {Component, OnInit, Inject, Injector} from 'angular2/core';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {MyCommentComponent} from '../my-comment';
import {RouteData, RouteParams, OnActivate, ComponentInstruction, CanActivate} from 'angular2/router';
import {Http} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'my-show-detailsview',
  templateUrl: 'my-show-detailsview.component.html',
  styleUrls: ['my-show-detailsview.component.css'],
  providers: [],
  directives: [MyCommentComponent],
  inputs: ['uid'],
})
//@CanActivate(() => tokenNotExpired())
export class MyShowDetailsviewComponent implements OnInit {

  constructor(public af: AngularFire, @Inject(FirebaseRef) public ref:Firebase, public data: RouteData, public injector: Injector, public params: RouteParams, private router: Router) {
  }
  event: FullEvent = {name: "",
  date: "",
  start_time: "",
  stop_time: "",
  info: "",
  adress: "",
  comments: [""],
  price: "",
  organiser: "",
  phone: "",
  email: "", 
  uid: null,
  imageURL: ""}
  
  //FirebaseObjectObservable<Event>
  
  //public name = "Placeholder, change to data from db"
  eventId;
  
  ngOnInit() {
    // Get uid from sender
    this.params = this.injector.parent.get(RouteParams);
    this.eventId = this.params.get('uid');
    this.ref.child('/events').child('/'+this.eventId).on("value", (v) => this.event = v.val());
    
  }

  
  onClick(id){
    this.router.navigate(['/My-detailview', { uid: id }]);
    return false;
  }
  
  // Check if the user is allowed to edit a specified event.
  isValid() {
    try {
      if(this.event.uid.includes(this.ref.getAuth().uid))
        return true;      
    }catch(e) {      
      return false;
    }
  }
  
  
}
