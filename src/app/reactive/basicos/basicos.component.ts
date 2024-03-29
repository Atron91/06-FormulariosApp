import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup ({ 
  //   nombre: new FormControl('TITAN X'),
  //   precio: new FormControl( 1500 ),
  //   existencias: new FormControl( 5 )

  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3)] ],
    precio: [ , [ Validators.min(0), Validators.required ]],
    existencias: [ , [ Validators.min(0), Validators.required ]],
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'TITAN X',
      precio: 1200,
      existencias: 5
    })
    
  }


  campoEsValido(campo: string){
    
    return this.miFormulario.controls[campo].errors
        && this.miFormulario.controls[campo].touched;
  }
  
  guardar(){

    if( this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

