import { Component, OnInit } from '@angular/core';

interface ManuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor:pointer;
      }
    `
  ]
})
export class SidemenuComponent {

  templateMenu: ManuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    }
  ];

  reactiveMenu: ManuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    }
  ];

  authMenu: ManuItem[] = [
    {
      texto: 'Login',
      ruta: './auth/login'
    },
    {
      texto: 'Registro',
      ruta: './auth/registro'
    }
  ];
}
