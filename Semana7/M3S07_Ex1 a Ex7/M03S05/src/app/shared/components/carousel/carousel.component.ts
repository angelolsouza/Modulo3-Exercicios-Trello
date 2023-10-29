import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Output() openModalFormulario: EventEmitter<any> = new EventEmitter();

  constructor() {}

  openModal() {
    this.openModalFormulario.emit();
  }
}
