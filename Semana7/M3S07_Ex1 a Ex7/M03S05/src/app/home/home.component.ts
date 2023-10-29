import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormularioComponent } from '../shared/components/modal-formulario/modal-formulario.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('modalFormulario', {static: true}) modalFormulario: TemplateRef<any> | undefined;
  modalUploadRef: NgbModalRef | undefined;

  constructor(private modalService: NgbModal) {}

  openModalFormularioHome() {
    //abertura de modal passando a referencia do Template
    //this.modalUploadRef = this.modalService.open(this.modalFormulario);

    //abertura de modal passando a referencia do Componente
    this.modalUploadRef = this.modalService.open(ModalFormularioComponent);
  }

  closeModalHome() {
    this.modalUploadRef?.close();
  }
}
