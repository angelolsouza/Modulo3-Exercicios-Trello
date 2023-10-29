import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosTrelloComponent } from './exercicios-trello.component';

describe(`${ExerciciosTrelloComponent.prototype.constructor.name}`, () => {
  let component: ExerciciosTrelloComponent;
  let fixture: ComponentFixture<ExerciciosTrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosTrelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciciosTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${ExerciciosTrelloComponent.prototype.verificaPosicao.name} 
      deve retornar uma exceção quando não encontrar o item`, 
  ()=>{
    
    expect(()=>{ component.verificaPosicao('Pizza'); }).toThrow();
  })

  it(`${ExerciciosTrelloComponent.prototype.enviarDados.name} 
    deve entrar no metodo validacao quando executado`, 
  ()=>{
    spyOn(component, 'validacao');
    
    component.enviarDados();

    expect(component.validacao).toHaveBeenCalled();
  })

  it(`${ExerciciosTrelloComponent.prototype.verificaPosicao.name} 
      deve retornar o item quando encontrar.`, 
  ()=>{
    
    expect(component.comidas).toContain('Lasanha');
  })
});
