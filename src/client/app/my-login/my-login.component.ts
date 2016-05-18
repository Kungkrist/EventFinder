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
         switch (error.code) {
           case 'INVALID_USER':
             console.log('The specified user account does not exist.');
             this.loginNotation = 'Användaren existerar inte!';
             break;
           
           case 'INVALID_PASSWORD':
             this.loginNotation = 'Lösenord stämmer inte!';
             break;
           
           case 'INVALID_TOKEN':
             this.loginNotation = 'Temporärt lösenord stämmer inte!';
             break;
             
           default:
             break;
         }
       } else {
        this.router.navigate(['/Home']);
        this.loginNotation = '';
      }
    });
  }
  
  resetPassword() {
    var str = prompt('Skriv in din e-post adress');
    
    if (str != null) {
     
        this._ref.child('/users').resetPassword({
        email: str
          }, error => {
             if (error) {
                switch (error.code) {
                  case 'INVALID_USER':
                    console.log('The specified user account does not exist.');
                    this.loginNotation = 'Användaren existerar inte!';
                  break;
                 default:
                    console.log('Error resetting password:', error);
                    this.loginNotation = 'Lösenord ändrades inte!';
                  }
                 } else {
                    console.log('Password reset email sent successfully!');
                    this.loginNotation = 'Temporärt lösenord skickat till ' + str;
                 }
              });
        
    }
  }
  
}
