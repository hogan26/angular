import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//primero importamos el componente recien creado, luego se ingresa al apartado de "declarations"

import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  en resumen, los pasos para crear un componente son:
  - crear el directorio con los archivos .component.ts donde se define el componente a partir del core y la llamada a los templates,
  el archivo components.spec.ts que corresponde al archivo de pruebas y los archivos de interfaz donde estan los component.html y 
  css respectivamente.
  - luego en el component.ts hay que modularizar el componente exportando la clase y dirigirse al archivo app.module.ts para
  importarlo y declararlo.

  - todos estos pasos se puede realizar a traves un solo comando "ng generate component +nombre_componente" o "ng g c +nombre_componente"
  de forma resumida. esto crear el directorio con todos los archivos, define el componente y la llamada a los templates, lo 
  modulariza (exporta) y luego importa el modulo (y ademas lo declara). esta es una funcionalidad de CLI de angular
  - al crear un componente a traves del comando, en el archivo.ts ademas de importar el decorado "component" adiciona el decorador
  OnInit y lo implementa dentro de la clase que lo exporta, esto hace referencia al ciclo de vida del componente
  
*/
