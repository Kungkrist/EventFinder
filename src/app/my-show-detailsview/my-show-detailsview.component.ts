import {Component, OnInit, Inject} from '@angular/core';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {MyCommentComponent} from '../my-comment';
import {RouteData, RouteParams, OnActivate, ComponentInstruction, CanActivate} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'my-show-detailsview',
  templateUrl: 'my-show-detailsview.component.html',
  styleUrls: ['my-show-detailsview.component.css'],
  providers: [],
  directives: [MyCommentComponent],
  inputs: ['uid'],
})
//@CanActivate(() => tokenNotExpired())
export class MyShowDetailsviewComponent implements OnInit {

  constructor(public af: AngularFire, @Inject(FirebaseRef) public ref:any, public data: RouteData, public params: RouteParams, private router: Router) {
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
    // this.params = this.injector.parent.get(RouteParams);
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
