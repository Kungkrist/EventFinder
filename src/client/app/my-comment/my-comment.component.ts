import {Component, OnInit, Input, Inject, Injector} from 'angular2/core';
import {Comment} from '../IComment';
import {MyCommentService} from '../my-comment.service';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {Http} from 'angular2/http';

@Component({
  moduleId: __moduleName,
  selector: 'my-comment',
  templateUrl: 'my-comment.component.html',
  styleUrls: ['my-comment.component.css'],
  providers: [MyCommentService]
})
export class MyCommentComponent implements OnInit {
  @Input()uid 
  comments: Comment[]
  constructor( @Inject(FirebaseRef) public ref:Firebase, public injector: Injector, private _mcs : MyCommentService) {}
  
  ngOnInit() {
  //  this._mcs.getComments().(r => this.comments = r);
    this.ref.child('/events').child('/'+this.uid).child('/comments').on("value", (v) => this.comments = v.val());
  }
  
  commentsCount() {
    if (this.comments != null || this.comments != undefined) {
      return this.comments.length;
    }
    return 0;
  }
  
  postComment() {
    console.log("Post");
    var x : Comment = {
      username: "lol",
      time: "14:45",
      date: "2016-05-23",
      text: "Jag har postat"
    };
    //this.comments.push(x);
    this.ref.child('/events').child('/'+this.uid).child('/comments/'+this.comments.length).update(x);
    return false;
  }
}
