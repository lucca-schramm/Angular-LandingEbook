import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit{
  @Input()
  informacoes: string="";
  @Input()
  imagem: string="";
  @Input()
  descricao: string="";
  @Input()
  linkVenda: string="";

  ngOnInit(): void {
  }
  constructor(){}


}
