import { Component } from '@angular/core';
import { MercadoPagoService } from '../services/mercadopago.service';


@Component({
  selector: 'app-pagamento-pix',
  templateUrl: './pagamento-pix.component.html',
  styleUrls: ['./pagamento-pix.component.css']
})
export class PagamentoPixComponent {
  payerFirstName: string='';
  payerLastName: string='';
  email: string='';
  identificationType: string='';
  identificationNumber: string='';
  productName: string='';
  buyAmount: number=0;

  constructor(private mercadoPagoService: MercadoPagoService) {}

  criarPagamento(): void {
    const paymentData = {
      transaction_amount: this.buyAmount,
      description: this.productName,
      payment_method_id: 'pix',
      payer: {
        email: this.email,
        first_name: this.payerFirstName,
        last_name: this.payerLastName,
        identification: {
          type: this.identificationType,
          number: this.identificationNumber
        }
      }
    };

    this.mercadoPagoService.criarPagamento(paymentData)
      .then(data => {
        console.log('Resposta:', data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }

}
