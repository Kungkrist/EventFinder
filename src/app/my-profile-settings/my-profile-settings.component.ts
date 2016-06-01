import {Component, OnInit, Inject} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseRef} from 'angularfire2';
import {RouteData, Router, RouteParams, OnActivate, ComponentInstruction, CanActivate} from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {MyMainComponent} from '../my-main'



@Component({
  moduleId: module.id,
  selector: 'my-profile-settings',
  templateUrl: 'my-profile-settings.component.html',
  styleUrls: ['my-profile-settings.component.css']
})
export class MyProfileSettingsComponent implements OnInit {
  
  email: string;
  oldPassword: string;
  newPassword: string;
  loginNotation: string ='';
  
  constructor(@Inject(FirebaseRef) public ref:any, public data: RouteData, public params: RouteParams, private router: Router, public af: AngularFire) {}
  
  ngOnInit() {
  }
  
  changePassword() {
this.ref.changePassword({
  email: this.email,
  oldPassword: this.oldPassword,
  newPassword: this.newPassword
}, error => {
  if (error) {
    switch (error.code) {
      case "INVALID_PASSWORD":
        console.log("The specified user account password is incorrect.");
        break;
      case "INVALID_USER":
        console.log("The specified user account does not exist.");
        break;
      default:
        console.log("Error changing password:", error);
    }
  } else {
    console.log("User password changed successfully!");
    this.loginNotation = "Lösenord ändrat!";
  }
});
  }

}
