import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSale',
})
export class OnSalePipe implements PipeTransform {
  transform(value: boolean, ...args: unknown[]): string {
    if (value) return 'Dang giam gia!';
    return '';
  }
}
