import {Injectable, Inject} from 'angular2/core';
import {AngularFire, FirebaseRef} from 'angularfire2/angularfire2'

@Injectable()
export class MyUsersService {

  constructor(public _af : AngularFire, @Inject(FirebaseRef) private _ref: Firebase) {}
  
  createAccount(email: string, password: string){    
    return new Promise(resolve => {        
      this._ref.createUser({
      email: email,
      password: password
      }, 
      (error, userData) => {
        let result = {"error": error, "userData": userData}
        resolve(result);
      });
    });         
  }
  
  addUser(userId: String, data : any) {
    this._af.database.object("/users/" + userId).set(data);    
  }
  
  get loggedInUserId() {
    return this._ref.getAuth().uid;
  }
  
  get auth() {
    return this._af.auth;
  }
}
