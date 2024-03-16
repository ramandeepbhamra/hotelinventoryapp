import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameHi'
})
export class NamePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value + ' ki kahp aa!';
  }

}
