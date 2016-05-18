import {Component, OnInit, Inject} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {FirebaseRef, FirebaseListObservable, AngularFire} from 'angularfire2/angularfire2'
import {CarouselEvent} from '../IEvent';
import {Carousel} from '../carousel.pipe';

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
  
  event: CarouselEvent = {
    name: 'Hej',
    date: 'igår',
    imageURL: 'http://www.metalinjection.net/wp-content/uploads/2014/05/Ghost-New-Album.jpg'
  }

constructor(public af: AngularFire,@Inject(FirebaseRef) private _ref: Firebase) {
}

ngOnInit() {
  this.slides = this.af.database.list('/events');
}

/*
  public constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }
*/
  public addSlide(event: CarouselEvent):void {
   // let newWidth = 600 + this.slides.le + 1;
    /*this.slides.push({
      image: event.imageURL,
      name: event.name,
      date: event.date
    });*/
  }

  // public removeSlide(index:number):void {
  //   this.slides.splice(index, 1);
  // }
}

