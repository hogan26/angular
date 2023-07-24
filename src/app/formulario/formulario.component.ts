import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  show_alert:boolean = false

  mostrar_en_consola(name:string){    
    this.show_alert = true
    console.log(name)
  }
}
