import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myReverseArray'
})
export class MyReverseArray implements PipeTransform {

  transform(value: any, args?: any[]): any {
    return value.reverse();
  }

}
