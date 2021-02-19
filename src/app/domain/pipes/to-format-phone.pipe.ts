import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFormatPhone'
})
export class ToFormatPhonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
