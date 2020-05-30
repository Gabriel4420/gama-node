const {get} = require('axios')
const URL = `https://swapi.dev/api/people`
async function obterPessoas(name){
  const url = `${URL}/?search=${name}&format=json`;
  const result = await get(url)
  return result.data;
}

module.exports ={
  obterPessoas
}