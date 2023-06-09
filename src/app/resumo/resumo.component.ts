import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit{
  @Input()
  subtitulo: string="";
  @Input()
  evidencia: string="";
  @Input()
  descricao: string="";

  ngOnInit(): void {
  }
  constructor(){}
}
