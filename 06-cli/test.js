const {deepEqual, ok} = require('assert');
const Database = require('./database');
const DEFAULT_ITEM_CADASTRAR = {
  Nome:'Flash',
  poder:'velocidade',
  id:1
}


describe('Suite de manipulação de herois', () => {

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

})