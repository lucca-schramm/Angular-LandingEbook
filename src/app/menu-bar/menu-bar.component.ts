import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  @Input()
  primeiroLink:string="";
  @Input()
  segundoLink:string="";
  @Input()
  terceiroLink:string="";


}
