import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild( 'miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'TITAN X',
    precio: '900',
    existencia: '1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.procucto?.invalid &&
           this.miFormulario?.controls.procucto?.touched;
  }

  precioValido(): boolean {
    return  this.miFormulario?.controls.precios?.touched
            && this.miFormulario?.controls.precios?.value < 0;
             
            
  }

  // guardar( miFormulario: NgForm ) {

    guardar(  ) {
    
    // console.log( this.miFormulario )

    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias: 0
    })

  }

}
