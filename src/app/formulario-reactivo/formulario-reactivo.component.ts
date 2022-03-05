import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MensajesService } from '../mensajes.service';
import { ValidacionesPropias } from '../validaciones-propias';


@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  resultado: string = "";

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    numero: new FormControl('', [Validators.required,ValidacionesPropias.numeroTelefono])
  });


  constructor(private mensajesServicio: MensajesService) {}

  submit() {
    if (this.formularioContacto.valid) {
      document.getElementById("resultado")?.setAttribute("style", 'color: green;')
      this.resultado = "Todos los datos son válidos";

      this.mensajesServicio.alta(this.formularioContacto.value).subscribe((datos1:any) => {
        if (datos1['resultado']=='OK') {
          alert(datos1['mensaje']);
        }
      });
    }
    else {
      document.getElementById("resultado")?.setAttribute("style", 'color: red;')
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

  ngOnInit(): void {
  }

}
