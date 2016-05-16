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
  
  constructor(public _af : AngularFire, @Inject(FirebaseRef) private _ref: Firebase, private router: Router) {}
  
  ngOnInit() {

  }
  
  login() {
    this._ref.authWithPassword({
       email    : this.email,
       password : this.password
      }, (error, authData) => {
       if (error) {
        console.log("Login Failed!", error);
       } else {
        console.log("Authenticated successfully with payload:", authData);
        this.router.navigate(['/Home']);
      }
    });
  }
}
