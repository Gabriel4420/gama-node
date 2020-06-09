const { deepEqual, ok}  = require('assert')

const DEFAULT_ITEM_CADASTRAR = {
  nome:'Flash',
  poder:'speed',
  id:1
}

describe ('Suite de manipulação de Herois', () => {
  it('Deve pesquisar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    ok(null, expected)
  })
})