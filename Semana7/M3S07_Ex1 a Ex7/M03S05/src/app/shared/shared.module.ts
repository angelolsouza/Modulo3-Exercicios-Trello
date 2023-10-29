import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ModalFormularioComponent } from './components/modal-formulario/modal-formulario.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [HeaderComponent, ModalFormularioComponent, CarouselComponent],
  exports: [HeaderComponent, ModalFormularioComponent, CarouselComponent],
  providers: [NgbActiveModal],
})
export class SharedModule {}
