import {Component, OnInit, Inject, Input} from 'angular2/core';
import {Event, FullEvent} from '../IEvent';
import {AngularFire, FirebaseListObservable, FirebaseRef} from 'angularfire2';

@Component({
  moduleId: __moduleName,
  selector: 'my-tile',
  templateUrl: 'my-tile.component.html',
  styleUrls: ['my-tile.component.css'],
  providers: []
})
export class MyTileComponent implements OnInit {
  @Input () eventId;
  constructor(public af: AngularFire, @Inject(FirebaseRef) public ref: Firebase) {}
  
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

  ngOnInit() {
    
     this.ref.child('/events/' + this.eventId).on("value", (a) => {
       this.event = a.val();
     });
    // this.event = this.af.database.list('/events');
  }
  
  checkPicture() {
    /*if(this.event.imageURL !== '' && this.event.imageURL !== undefined) {
      console.log(this.event.imageURL)
      this.event.imageURL = 'http://i.imgur.com/jq4D5B6.png';
      var picRef = new Firebase('');
      picRef.once('value', (snapshot) => {
        return snapshot.val();
      }, err => {
        console.log("error..." + err);
        
      });
      return this.event.imageURL;
    } else {
      return this.event.imageURL;
    }
    
   */
  }
}

