import {Pipe, PipeTransform} from 'angular2/core';
import {DateHandlerService} from './date-handler.service';


@Pipe({
  name: 'carousel'
})
export class Carousel implements PipeTransform {
  constructor(){}

   transform(value: any[], term): any[] {
     let dateHandler = new DateHandlerService();
    return value.map(items => {
      // Filtered array of names
      let arr = items.filter(item => {
        console.log(item.date === dateHandler.getDate());
        if (item.date === dateHandler.getDate()){
          console.log(item);
          return item;
        } 
       // return item.date === dateHandler.getDate();
      });
      return arr;
   
      // Adds the two arrays togheter and removes duplicates
     
    });
  }
}
