import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verMas'
})
export class MaxlengthPipe implements PipeTransform {
/*
Forma 1
  transform(value: string): string {
    const messageFinal:string=value.slice(0,20).concat('...');
    return messageFinal;
  }
*/
/*
Forma 2
  transform(value: string): string {
        return value.slice(0,20).concat('...');
  }
*/
//Forma 3
transform = (value:string)=>(value.slice(0,20).concat('...'));


}
