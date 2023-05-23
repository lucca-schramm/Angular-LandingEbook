import { Component } from '@angular/core';
import { MercadoPagoService } from '../services/mercadopago.service';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pagamento-pix',
  templateUrl: './pagamento-pix.component.html',
  styleUrls: ['./pagamento-pix.component.css']
})
export class PagamentoPixComponent {
  constructor(private mercadoPagoService: MercadoPagoService) {}

  criarPagamento(): void {
    const paymentData = {
      transaction_amount: 100,
      description: 'Título do produto',
      payment_method_id: 'pix',
      payer: {
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        identification: {
          type: 'CPF',
          number: '19119119100'
        },
        address: {
          zip_code: '06233200',
          street_name: 'Av. das Nações Unidas',
          street_number: '3003',
          neighborhood: 'Bonfim',
          city: 'Osasco',
          federal_unit: 'SP'
        }
      }
    };

    this.mercadoPagoService.criarPagamento(paymentData)
      .then(data => {
        // Lógica para tratamento de sucesso
        console.log('Resposta:', data);
      })
      .catch(error => {
        // Lógica para tratamento de erro
        console.error('Erro:', error);
      });
  }

}
