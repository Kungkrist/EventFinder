import {Component, OnInit, Input, Inject, Injector} from 'angular2/core';
import {Comment} from '../IComment';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {Http} from 'angular2/http';
import {MyReverseArray} from '../my-reverse-array.pipe'
import { DateHandlerService} from '../date-handler.service'

@Component({
  moduleId: __moduleName,
  selector: 'my-comment',
  templateUrl: 'my-comment.component.html',
  styleUrls: ['my-comment.component.css'],
  providers: [DateHandlerService],
  pipes: [MyReverseArray]
})
export class MyCommentComponent implements OnInit {
  @Input()uid 
  comments: Comment[]
  commentText =  ""
  constructor(private dateHandlerService: DateHandlerService, @Inject(FirebaseRef) public ref:Firebase, public injector: Injector) {}
  
  ngOnInit() {
  //  this._mcs.getComments().(r => this.comments = r);
    this.ref.child('/events').child('/'+this.uid).child('/comments').on("value", (v) => this.comments = v.val());
  }
  
  commentsCount() {
    if (this.comments != null || this.comments != undefined) {
      return this.comments.length;
    }
    this.comments = [];
    return 0;
  }
  
  postComment() {
    var text = this.commentText;
    var date = this.dateHandlerService.getDate();
    var time = this.dateHandlerService.getTime();
    var comment : Comment = {
        username: "Anonym",
        time: time,
        date: date,
        text: text
      };
    if (this.isInputValid(text)) {
      if(this.ref.getAuth()) {    
        // Get the username of the logged in user.
        this.ref.child('/users/' + this.ref.getAuth().uid).once('value', user => {
          comment.username = user.val().username;
          this.ref.child('/events').child('/'+this.uid).child('/comments/'+this.comments.length).update(comment);
          this.commentText = "";
          return false;
        });
      }
      else {
        if (text === '') {
          console.log("String is empty");
          return false;
        }
        if (/^ +$/.test(text) === true) {
          console.log("Whitespaces in text");
          return false;
        }
        this.ref.child('/events').child('/'+this.uid).child('/comments/'+this.comments.length).update(comment);
        this.commentText = "";
        return false;
      }
    }
  }
  //Returns true if text in commentfield is valid.
  isInputValid(text: string) {
      if (text === '') {
        console.log("String is empty");
        return false;
      }
      if (/^ +$/.test(text) === true) {
        console.log("Whitespaces in text");
        return false;
      } 
      return true;
  }
}
