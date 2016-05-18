import {Component, OnInit, Inject} from 'angular2/core';
import {FirebaseRef, AngularFire} from 'angularfire2';
import {User} from '../IUser';
import {Router} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'my-create-account',
  templateUrl: 'my-create-account.component.html',
  styleUrls: ['my-create-account.component.css']
})
export class MyCreateAccountComponent implements OnInit {

  email: string = '';
  password: string = '';
  username: string = '';  
  createAnnotation : string = '';
  gravatar : string = '';
  
  constructor(public _af : AngularFire, @Inject(FirebaseRef) private _ref: Firebase, private router: Router) {}
  
  ngOnInit() {
  }
  
  createAccount() {
    var self : this;
    
    if (this.email !== '' && this.password !== '' && this.username !== '') {
      this._ref.createUser({
        email: this.email,
        password: this.password
      }, (error, userData) => {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              this.createAnnotation = 'The new user account cannot be created because the email is already in use.';
              break;
            case "INVALID_EMAIL":
              this.createAnnotation = 'The specified email is not a valid email.';
              break;
            default:
              this.createAnnotation = 'Error creating user: ' + error;
          }
        } else {
          this.createAnnotation = '';
          var authData = this._ref.getAuth();
          let user : User = { username: this.username,
                              uid: userData.uid,
                              events: [''],
                              firstName: '',
                              lastName: '',
                              email: this.email,
                              gravatar: authData.password.profileImageURL
                             }
                            
          this._af.database.object("/users/" + userData.uid).set(user);
          this.router.navigate(['/Login']);
        }
      });      
    }else {
      this.createAnnotation = 'You need to fill all the textfields.'
    }
  }
}
