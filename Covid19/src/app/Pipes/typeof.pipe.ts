import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeof',
})
export class TypeofPipe implements PipeTransform {
  transform(value: any | unknown): any {
    //console.log(`${value} is type  ${typeof value}`);
    return typeof value;
  }
}
