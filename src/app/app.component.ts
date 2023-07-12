import { Component } from '@angular/core';

@Component({
  /*
    - el selector es el nombre de la etiqueta en el archivo index.html
    - al usar la etiqueta app-root se llama al archivo de templateUrl donde esta todo el contenido html que renderiza dicha
    etiqueta. de igual manera, el atributo styleUrls llama al archivo de estilos que usa el templateUrl.
    - ambos atributos indicados anteriormente son opcionales, ya que se puede añadir codigo html y css directamente en el
    componente a traves de los atributos "template" y "styles" respectivamente.  
  */
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h2>angular (dentro del componente)</h2>
  // `,
  styleUrls: ['./app.component.css'],
  // styles: [`
  //   h2{
  //     color:red;
  //   }
  // `],
})
export class AppComponent {
  title = 'ejemplo_angular';
}
