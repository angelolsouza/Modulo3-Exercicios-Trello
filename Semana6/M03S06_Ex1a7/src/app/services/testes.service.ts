import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestesService {
  constructor() {}

  somar(valor1: number, valor2: number) {
    return valor1 + valor2;
  }

  multiplicar(valor1: number, valor2: number) {
    if (valor1 == 0) {
      throw new Error('Informe um valor diferente de zero');
    }

    return valor1 * valor2;
  }

  dividir(valor1: number, valor2: number) {
    if (valor1 == 0) {
      throw new Error('Informe um valor diferente de zero');
    }

    if (valor2 == 0) {
      throw new TypeError('Não é possível dividir por zero');
    }

    return valor1 / valor2;
  }

  criarUsuario(nome: string, data:string){
    let user = {
      nome: nome,
      dataNasc: this.formatarData(data)
    }
    return user;
  }

  formatarData(data: string){
    return new Date(data);
  }
}
