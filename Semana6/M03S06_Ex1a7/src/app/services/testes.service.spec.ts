import { TestBed } from '@angular/core/testing';

import { TestesService } from './testes.service';

describe(TestesService.prototype.constructor.name, () => {
  let service: TestesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Para fazer a verificação de vários specs comente um e descomente outro

  //Exemplo de nomenclatura da descrição do teste
  it(`${TestesService.prototype.somar.name} deve somar dois números quando executado`, () => {
    let soma = service.somar(10, 30); //método declarado no escopo do service
    expect(soma).toEqual(40); //irá validar se os valores são iguais
  });

  it('Validando o matcher toEqual() com objetos', () => {
    const aluno1 = { value: true, nome: 'João' };
    const aluno2 = { value: true, nome: 'João' };
    expect(aluno1).toEqual(aluno2); //retornar true
    // expect(aluno1).not.toEqual(aluno2); //retornar false
  });

  it('Validando o matcher toBe()', () => {
    const aluno1 = {};
    const aluno2 = aluno1;

    const aluno3 = {};
    const aluno4 = 'teste';
    expect(aluno1).toBe(aluno2); //retornar true pois possuem a mesma referência de memória
    // expect(aluno1).toBe(aluno3); //retornar false pois não possuem a mesma referência de memória
    // expect(aluno1).toBe(aluno4); //retornar false pois possuem valores diferentes
  });

  it('Validando o matcher toMatch()', () => {
    const texto = 'HelloWorld';

    // No toMatch() podemos usar expressões regulares (regex)
    expect(texto).toMatch(/^[A-Za-z]+$/); //retornar true
    // expect('12345-678').toMatch(/^\d{5}-\d{3}$/); //retornar true pois bate com o regex
  });

  it('Validando o matcher toBeUndefined()', () => {
    let nota = undefined;
    // nota = 10; //Caso essa linha seja descomentada o teste irá falhar
    expect(nota).toBeUndefined(); //retornar true pois somente espera undefined
  });

  it('Validando o matcher toBeDefined()', () => {
    let nota: any = 10;
    // nota = undefined; //Caso essa linha seja descomentada o teste irá falhar
    // nota = null; //Caso essa linha seja descomentada o teste irá passar pois null é um valor definido

    expect(nota).toBeDefined(); //retornar true pois espera qualquer valor não sendo undefined
  });

  it('Validando o matcher toBeNull()', () => {
    let nota = null;
    // nota = undefined; //Caso essa linha seja descomentada o teste irá falhar

    expect(nota).toBeNull(); //retornar true pois espera apenas o valor null
  });

  //Mais usado para validações a qual retorne apenas true ou false
  it('Validando o matcher toBeTrue()', () => {
    let valor = true;
    let valor2 = false;

    expect(valor).toBeTrue(); //retorna true
    // expect(valor).toBeTrue(); //retorna false
    // expect(valor2).toBeFalse(); //retorna true
    // expect(valor2).toBeFalse(); //retorna false
    // expect(new Boolean(true)).toBeTrue(); //retorna false pois não é o mesmo tipo de dado
  });

  // Mais usado para validações a qual retorne qualquer valor não primitivo true ou false
  it('Testando o toBeTruthy() e o toBeFalsy()', () => {
    let array = ['João', 'Maria'];
    //Qualquer valor não sendo um dos itens do array abaixo será considerado um Truthy
    // [ false, 0, '', null, undefined, NaN ];

    expect(array.length).toBeTruthy(); //retorna true
    //expect(0).toBeFalsy(); //retorna true
    //expect(null).toBeFalsy(); //retorna true
  });

  it('Deve validar o uso do matcher toContain()', () => {
    let frutas = ['laranja', 'maçã', 'pera', 34];

    expect(frutas).toContain(34); //retorna true
    // expect(frutas).toContain('34'); //retorna false pois não foi possivel encontrar a string '34'
  });

  it(`${TestesService.prototype.multiplicar.name} 
      deve lançar uma exeção quando não passado o primeiro parâmetro`, () => {
    expect(() => {
      service.multiplicar(0, 10);
    }).toThrow(); //irá validar se a exeção foi lançada
    // expect(()=> service.multiplicar(10,12)).toThrow(); //retornar false pois não foi lançada a exeção
  });

  it(`${TestesService.prototype.dividir.name} 
      deve lançar uma exeção detalhada quando passar certos valores`, () => {
    // expect(() => {service.dividir(10, 0)}).toThrowError("Não é possível dividir por zero");
    expect(() => {
      service.dividir(10, 0);
    }).toThrowError(TypeError);
  });

  //Exemplo de uso do xit para ignorar um teste
  xit(`${TestesService.prototype.somar.name} deve somar dois números quando executado`, () => {
    let soma = service.somar(30, 30);
    expect(soma).toEqual(40);
  });

  it('Deve criar um novo usuário quando o campo nome e idade estão preenchido', () => {
    spyOn(service, 'formatarData');

    service.criarUsuario('Aluno 1', '2000-12-12');
    expect(service.formatarData).toHaveBeenCalled();
  });

  it('Deve criar um novo usuário quando o campo nome e idade estão preenchido', () => {
    spyOn(service, 'formatarData');

    service.criarUsuario('Aluno 1', '2000-12-12');
    service.criarUsuario('Aluno 1', '2000-12-12');
    service.criarUsuario('Aluno 1', '2000-12-12');
    expect(service.formatarData).toHaveBeenCalledTimes(3);
  });

  it('Deve criar um novo usuário quando o campo nome e idade estão preenchido', () => {
    spyOn(service, 'formatarData');

    service.criarUsuario('Aluno 1', '2000-12-12');
    service.criarUsuario('Aluno 1', '2000-11-19');
    service.criarUsuario('Aluno 1', '2000-06-14');

    expect(service.formatarData).toHaveBeenCalledWith('2000-06-14');
    expect(service.formatarData).toHaveBeenCalledWith('2000-12-12');
    expect(service.formatarData).toHaveBeenCalledWith('2000-11-19');
  });
});
