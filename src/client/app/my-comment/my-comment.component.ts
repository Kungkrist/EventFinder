import {Component, OnInit, Input, Inject, Injector} from 'angular2/core';
import {Comment} from '../IComment';
import {MyCommentService} from '../my-comment.service';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {Http} from 'angular2/http';
import {MyReverseArray} from '../my-reverse-array.pipe'

@Component({
  moduleId: __moduleName,
  selector: 'my-comment',
  templateUrl: 'my-comment.component.html',
  styleUrls: ['my-comment.component.css'],
  providers: [MyCommentService],
  pipes: [MyReverseArray]
})
export class MyCommentComponent implements OnInit {
  @Input()uid 
  comments: Comment[]
  commentText =  ""
  constructor( @Inject(FirebaseRef) public ref:Firebase, public injector: Injector, private _mcs : MyCommentService) {}
  
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
    
    var comment : Comment = {
        username: "Anonymous",
        time: "14:45",
        date: "2016-05-23",
        text: text
      };
     
    if(this.ref.getAuth()) {          
      // Get the username of the logged in user.
      console.log("hej");
      this.ref.child('/users/' + this.ref.getAuth().uid).once('value', user => {       
        comment.username = user.val().username;
        this.ref.child('/events').child('/'+this.uid).child('/comments/'+this.comments.length).update(comment);
        return false;
      });
    }else {
    //this.comments.push(x);
    this.ref.child('/events').child('/'+this.uid).child('/comments/'+this.comments.length).update(comment);
    return false;
    }
  }
}
