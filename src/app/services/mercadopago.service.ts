import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MercadoPagoService {
  private baseUrl = 'https://api.mercadopago.com/v1';
  private accessToken = 'SEU_ACCESS_TOKEN'; // Substitua pelo seu access_token do Mercado Pago

  criarPagamento(paymentData: any): Promise<any> {
    const url = `${this.baseUrl}/payments`;

    return axios.post(url, paymentData, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.data);
    });
  }
}
