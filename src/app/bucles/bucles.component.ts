import { Component } from '@angular/core';

// para este ejemplo de bucles usaremos el objeto (definido como interface) "persona", por lo tanto lo importamos

import {persona} from '../persona'

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  // ahora si esto lo quiero mostrar en una vista creando un elemento para cada persona con un ciclo for, primero debo interpolarlo
  // esto ocupando las {{}} dentro del componente.html
  personas:persona[] = [
    {nombre: 'nelson', edad: 27},
    {nombre: 'alvaro', edad: 22}
  ]

}
