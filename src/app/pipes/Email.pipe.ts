import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EMAIL',
})
export class EmailPipe implements PipeTransform {
  transform(email: string) {}
}
