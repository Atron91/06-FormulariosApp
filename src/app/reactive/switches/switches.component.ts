import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero:[ 'M', Validators.required ],
    notificaciones: [ true , Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: "F",
    notificaciones: true,
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true });

      // this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue =>
      //   console.log( newValue ));

      this.miFormulario.valueChanges.subscribe( ({ condiciones, ...restoDeArgumetnos }) => {
        // delete form.condiciones;
        this.persona = restoDeArgumetnos;
      });
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };

    delete formValue.condiciones;

    this.persona = formValue;
  }

}
