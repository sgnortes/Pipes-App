import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  // i18nSelect
  nombre: string = 'Sergio';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Sergio', 'Adrián'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  constructor() {}

  ngOnInit(): void {}

  cambiarNombre() {
    if (this.nombre === 'Sergio') {
      this.nombre = 'Maria';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Sergio';
      this.genero = 'masculino';
    }
  }

  borrarClientes() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    dirección: 'Ottawa, Canada',
  };

  // JsonPipe
  heroes = [
    { nombre: 'Superman', vuela: true },
    { nombre: 'Batman', vuela: true },
    { nombre: 'Hulk', vuela: false },
  ];

  // Async pipe
  miObservable = interval(1000); // 0, 1, 2, 3, 4, ...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 7000);
  });
}
