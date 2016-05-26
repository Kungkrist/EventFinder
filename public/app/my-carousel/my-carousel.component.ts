import {Component, OnInit, Inject} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {FirebaseRef, FirebaseListObservable, AngularFire} from 'angularfire2/angularfire2'
import {CarouselEvent} from '../IEvent';
import {Carousel} from '../carousel.pipe';
import {Router} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'my-carousel',
  directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'my-carousel.component.html',
  styleUrls: ['my-carousel.component.css'],
  pipes: [Carousel]
})
export class MyCarouselComponent implements OnInit {
  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides: FirebaseListObservable <any []>;

constructor(public af: AngularFire,@Inject(FirebaseRef) private _ref: Firebase, 
            private router: Router) {
}

ngOnInit() {
  this.slides = this.af.database.list('/events');
}

onClicked(id: String) {
  console.log("Klickad");
  this.router.navigate(['/My-show-detailsview', { uid: id }]);
}
}

