import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplication'
})
export class MultiplicationPipe implements PipeTransform {

  transform(value: number, arg = 2): number {
    return value * arg;
  }

}