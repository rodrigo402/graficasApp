import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  // crea propiedades personalizadas para validar los campos y los exporta
public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerStrider = (control: FormControl): ValidationErrors | null =>{
    const valor = control.value?.trim();
    if( valor == 'strider'){
        return {noStrider: true}
    }
    return null;
    }
// validar contraseñas iguales
  camposIguales(campo1: string, campo2: string){
    
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      
      if( pass1 !== pass2){
        formGroup.get(campo2)?.setErrors({noIguales:true});
        return {noIguales: true}
      }else{
         formGroup.get(campo2)?.setErrors(null);
      return null
      }
      
     
    }

  }


}
