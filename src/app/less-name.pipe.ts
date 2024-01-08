import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lessName'
})
export class LessNamePipe implements PipeTransform {

  transform(title: string): string {
    return title.split(" ").slice(0,3).join(" ");
  }

}
