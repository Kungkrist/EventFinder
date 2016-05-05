import {Component, OnInit} from 'angular2/core';
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
  public comments: Comment[];
  public hej = {name:"ost"};
  constructor(private _mcs : MyCommentService) {}
  
  ngOnInit() {
    this._mcs.getComments().then(r => this.comments = r);
  }
}
