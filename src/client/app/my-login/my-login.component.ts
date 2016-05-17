import {Component, OnInit, Inject} from 'angular2/core';
import {AngularFire, FirebaseRef} from 'angularfire2';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router'
import {MyMainComponent} from '../my-main'

@Component({
  moduleId: __moduleName,
  selector: 'my-login',
  templateUrl: 'my-login.component.html',
  styleUrls: ['my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  email: string;
  password: string;
  loginNotation: string = '';
  
  constructor(public _af : AngularFire, @Inject(FirebaseRef) private _ref: Firebase, private router: Router) {}
  
  ngOnInit() {
    //ost
  }
  
  login() {
    this._ref.authWithPassword({
       email    : this.email,
       password : this.password
      }, (error, authData) => {
       if (error) {
        this.loginNotation = error;
       } else {
        this.router.navigate(['/Home']);
        this.loginNotation = '';
      }
    });
  }
}
