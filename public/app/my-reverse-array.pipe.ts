import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'myReverseArray'
})
export class MyReverseArray implements PipeTransform {

  transform(value: any, args?: any[]): any {
    return value.reverse();
  }

}
