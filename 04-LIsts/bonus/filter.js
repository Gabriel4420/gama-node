//destructering
const { obterPessoas } = require('../for-forin/service')

/* 
const item = {
  nome:'gabriel',
  idade: 12
}

const { nome } = item 
console.log(nome)

*/
Array.prototype.meuFilter = function(callback){
  const list = [];
  for(index in this){
    const item = this[index]
    const result = callback(item, index, this);
    // 0 , "" , null, undefined === false
    if(!result) continue;
    list.push(item)
  }
  return list;
}
async function Main() {
  try {
    const { results } = await obterPessoas('a')

    /* const familiaLars = results.filter((item) => {
      // por padrão precisa retornar um bool para informar se deve manter
      // ou remover da lista { false => remove da lista , true => mantem}
      // não encontrou => -1 | encontrou => posiçãoNoArray

     /*  const result = item.name.toLowerCase().indexOf('lars') !== -1
      return result  */

    /* }) */ 

    const familiaLars = results.meuFilter((item,index,list) => {
      console.log(`index: ${index}`,list.length)
      return item.name.toLowerCase().indexOf('lars') !== -1
    } )

    const names = familiaLars.map((pessoa) => pessoa.name )
    console.log(names)
    
  } catch (error) {
    console.error('fudeo',error)
  }
}

Main()