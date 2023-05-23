import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { ResumoComponent } from './resumo/resumo.component';
import { AutorComponent } from './autor/autor.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PagamentoPixComponent } from './pagamento-pix/pagamento-pix.component';

@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent,
    ResumoComponent,
    AutorComponent,
    MenuBarComponent,
    PagamentoPixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
