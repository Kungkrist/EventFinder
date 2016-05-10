import {Component, OnInit, Input} from 'angular2/core';
import {Comment} from '../IComment';
import {MyCommentService} from '../my-comment.service'

@Component({
  moduleId: __moduleName,
  selector: 'my-comment',
  templateUrl: 'my-comment.component.html',
  styleUrls: ['my-comment.component.css'],
  providers: [MyCommentService]
})
export class MyCommentComponent implements OnInit {
  @Input()comments 
  constructor(private _mcs : MyCommentService) {}
  
  ngOnInit() {
  //  this._mcs.getComments().(r => this.comments = r);
  }
  
  commentsCount() {
    if (this.comments != null || this.comments != undefined) {
      return this.comments.length;
    }
    return 0;
  }
}
