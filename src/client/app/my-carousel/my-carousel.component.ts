import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {CAROUSEL_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';



@Component({
  moduleId: __moduleName,
  selector: 'my-carousel',
  directives: [CAROUSEL_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: 'my-carousel.component.html'
})
export class MyCarouselComponent {
  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];

  public constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  public addSlide():void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  public removeSlide(index:number):void {
    this.slides.splice(index, 1);
  }
}
