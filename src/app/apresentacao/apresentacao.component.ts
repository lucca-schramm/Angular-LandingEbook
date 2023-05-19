import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {
  @Input()
  titulo: string = "";
  @Input()
  imagem: string = "";
  @Input()
  resumo: string = "";
  @Input()
  subtitulo: string = "";
  @Input()
  linkVenda: string = "";

  ngOnInit(): void {

  }
  constructor() { }

}
