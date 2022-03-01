import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verificado'
})
export class VerificadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value.user != 'undefined') {
      console.log(value)
      if (typeof value.user.is_verified != 'undefined') {
        return 'bx bx-cool bx-spin'
      }
    }
  }

}
