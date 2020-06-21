const {deepEqual, ok} = require('assert');
const Database = require('./database');
const DEFAULT_ITEM_CADASTRAR = {
  Nome:'Flash',
  poder:'velocidade',
  id:1,
}

const DEFAULT_ITEM_ATUALIZAR = {
  Nome:'Lanterna Verde',
  poder:'cria tudo que puder imaginar com o anel',
  id:2,
}


describe('Suite de manipulação de herois', () => {

  before(async () => {
    await Database.remover()
    await Database.cadastrar(DEFAULT_ITEM_CADASTRAR),
    await Database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
  })

  it('deve listar um heroi pelo id', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const result = await Database.listar(1);
    deepEqual(result[0], expected);
  });

   it('deve cadastrar um heroi', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    await Database.cadastrar(DEFAULT_ITEM_CADASTRAR);

    const [realResult] = await Database.listar(expected.id);
    deepEqual(realResult, expected);
  }); 

  it('Deve remover um heroi por id',async () => {
    const expected = DEFAULT_ITEM_CADASTRAR.id;
    const result = await Database.remover(DEFAULT_ITEM_CADASTRAR.id);
    deepEqual(result, expected);
  })

  it('Deve atualizar um heroi pelo id', async () =>{
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      Nome:'Batman',
      poder:'especialista em analize investigativa e artes marciais'
    };
    await Database.atualizar(expected.id, {
      Nome: expected.Nome,
      poder: expected.poder,
      
    })
    
    const [result] = await Database.listar(expected.id)
  
    deepEqual(result, expected)

  })

})