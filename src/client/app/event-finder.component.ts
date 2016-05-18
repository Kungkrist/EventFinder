import {Component, Inject} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {AngularFire} from 'angularfire2';
import {MyMainComponent} from './my-main';
import {MyDetailviewComponent} from './my-detailview';
import {MyShowDetailsviewComponent} from './my-show-detailsview';
import {MyProfileSettingsComponent} from './my-profile-settings'
import {MyCreateAccountComponent} from './my-create-account/my-create-account.component';
import {MyLoginComponent} from './my-login/my-login.component';
import {FirebaseRef, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';
import {CORE_DIRECTIVES} from 'angular2/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {MyUserEventsComponent} from './my-user-events'

@Component({
  moduleId: __moduleName,
  selector: 'event-finder-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'event-finder.component.html',
  styleUrls: ['event-finder.component.css'],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, DROPDOWN_DIRECTIVES],
  pipes: []
})

@RouteConfig([

  {path:'/home', name: 'Home', component: MyMainComponent, useAsDefault: true},
  {path:'/my-detailview', name: 'My-detailview', component: MyDetailviewComponent},
  {path:'/my-show-detailsview', name: 'My-show-detailsview', component: MyShowDetailsviewComponent},
  {path:'/create-account', name: 'CreateAccount', component: MyCreateAccountComponent},
  {path:'/login', name: 'Login', component: MyLoginComponent},
  {path:'/my-events', name: 'UserEvents', component: MyUserEventsComponent},
  {path:'/my-profile-settings', name: 'Settings', component: MyProfileSettingsComponent},
  {path: '/*path', component: MyMainComponent}
])

export class EventFinderApp{
  users: FirebaseListObservable<{}>;
    constructor(public af : AngularFire, @Inject(FirebaseRef) public ref: Firebase, private router: Router) {}

  
    ngDoCheck() { 
    if(this.users === undefined) {
      try {
        this.users =  this.af.database.list('/users/' + this.ref.getAuth().uid);
        console.log("hej");
      } catch(e) {
        
      }
    }
  }
  
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  
  public logout() {
    this.users = undefined;
    this.af.auth.logout();
  }

  ngOnInit() {
    //this.logout();
  }
  
  newEventClick() {
    this.router.navigate(['/My-detailview', { uid: ''}]);
    return false;
  }
}
