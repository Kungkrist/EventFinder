import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'search'
})
export class Search implements PipeTransform {

  transform(value: any[], term): any[] {
    return value.map(items => {
      return items.filter(item => item.name.toLocaleLowerCase().includes(term));
    });
  }

}
