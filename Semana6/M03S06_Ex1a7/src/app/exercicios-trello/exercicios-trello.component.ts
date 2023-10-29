import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios-trello',
  templateUrl: './exercicios-trello.component.html',
  styleUrls: ['./exercicios-trello.component.css']
})
export class ExerciciosTrelloComponent {
  comidas: string[] = ['Batata frita', 'Hamburguer', 'Sorvete', 'Lasanha'];


  verificaPosicao(item:string){
    let index = this.comidas.indexOf(item);
    // console.log(index);
    if(index != -1){
      return item;
    }else{
      throw new Error("Item não encontrado");
    }
  }

  addItem(comida: string){
    this.comidas.push(comida);
  }

  enviarDados(){
    if(this.validacao()){
      //enviando meus dados
    }
  }

  validacao(){
    return true;
  }
}
