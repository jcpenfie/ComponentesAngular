import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export class ValidacionesPropias {
    static numeroTelefono(control: AbstractControl): ValidationErrors | null {
        let nro: string = control.value;
        let patron = /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/gm;
        if (patron.test(nro) || nro == "") {
            return null;
        } else {
            return { numTel: true }
        }
    }
}
