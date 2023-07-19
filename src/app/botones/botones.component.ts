import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
    text_color:string = ""
    button_disabled:boolean = false

    src = "https://images.pexels.com/photos/17427998/pexels-photo-17427998/free-photo-of-primavera-en-val-gardena.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
}
