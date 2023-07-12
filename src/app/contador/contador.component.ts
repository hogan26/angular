import { Component } from "@angular/core";
import { persona } from '../persona';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls:['contador.component.css'],
})

/*
    para modularizar este componente y asi poder hacer uso de el en otros componentes hay que exportarlo y dirigirse al 
    documento app.module.ts para importarlo
*/

export class ContadorComponent{
    /*
        el concepto de interpolación funciona de la siguiente manera. si quisiera almacenar informacion en una variable puedo 
        hacerlo creandolo dentro de la clase y llamarla en la vista del componente (esto solo funcionará en la vista del 
        componente y en ningun otro lugar, ni siquiera si estoy importando un componente dentro de otro).
    */

    /*
        al estar basado en typescript, las variables se pueden tipificar: string, any, etc. tambien se pueden definir objetos, sin
        embargo, para tipificar los atributos de un objeto se debe hacer uso de interfaces las cuales se definen en un archivo
        dentro de la carpeta "app" y se exportan. luego de esto hay que importarlo dentro del componente, como se muestra arriba.
        hecho esto podemos tipificar el objeto lo que vinculará el objeto a la interface y con ello la tipificacion de sus 
        atributos.
    */

    nombre:string = "Nelson"

    persona:persona = {
        nombre:"Nelson",
        edad:27
    }

    numero:number = 1

}