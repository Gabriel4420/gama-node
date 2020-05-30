const { obterPessoas } = require('../for-forin/service')

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial: this[0]
  for(let index = 0; index <= this.length -1; index ++){
    valorFinal = callback(valorFinal,this[index],this)
  }
  return valorFinal;
}

async function main() {
  try {
    const {results} = await obterPessoas('a');
    const pesos = results.map((item) => parseInt(item.height));
    console.log('pesos',pesos)
    //[20.2,30.3,40.5] = 0
    // const tot = pesos.reduce((before,next) => {
    //   return before + next;
    // })
    const minhaLista = [
      ['Erick','Wendel'],
      ['NodeBr','Nerdzão']
    ]

    const tot = minhaLista.meuReduce((before,next)=>{
      return before.concat(next)
    },[]).join(',')

    console.log('Total: ',tot)

  } catch (error) {
    console.error('fudeo',error);
  }
}

main()