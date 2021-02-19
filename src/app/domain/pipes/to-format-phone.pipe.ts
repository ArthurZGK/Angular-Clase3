import { Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs';

@Pipe({
  name: 'toFormatPhone'
})
export class ToFormatPhonePipe implements PipeTransform {

  transform(value: string): string {
    const telefono:string="000000000".concat(value).substr(-9,9);
    return telefono.substring(0,1).concat("-",telefono.substring(1,5),"-",telefono.substring(5))
  }

}
