import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

describe(HomeComponent.prototype.constructor.name, () => {
  //variável que irá receber a instância do componente
  let component: HomeComponent;

  //variável que irá receber com a ajudar do TestBed a preparação do componente para o teste
  let fixture: ComponentFixture<HomeComponent>;

  // Antes de cada teste, o TestBed irá montar o componente
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent],
      imports: [ReactiveFormsModule],
    }) //montou todas as importações necessárias para o teste
      .compileComponents(); //compilou o template e o css

    fixture = TestBed.createComponent(HomeComponent); //criou uma instância do componente
    component = fixture.componentInstance; //atribuiu a instância do componente a variável component
    fixture.detectChanges(); //disparou o ciclo de vida do componente
  });

  // Teste padrão criado para validar se o componente foi criado
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
