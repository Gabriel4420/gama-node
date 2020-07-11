const ICrud = require('./interfaces/interfaceCRUD');

class Postgres extends ICrud{
  constructor(){
    super()
  }

  create(item){
    console.log('o item foi salvo em postgres');
  }
}

module.exports = Postgres;