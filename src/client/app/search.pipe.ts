import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'search'
})
export class Search implements PipeTransform {

  transform(value: any[], term): any[] {
    
    return value.map(items => {
      // Filtered array of names
      let arr = items.filter(item => item.name.toLocaleLowerCase().includes(term));
      
      // Filtered array of info
      let arr2 = items.filter(item => item.info.toLocaleLowerCase().includes(term));
      
      // Adds the two arrays togheter and removes duplicates
      let result = arr.concat(arr2.filter((item) => {
        return arr.indexOf(item) < 0;
      }));
      
      return result.length > 0 ? result : ["no-events"];
    });
  }
}
