const ICrud = require('./interfaces/interfaceCRUD');
class MongoDB extends ICrud {
  constructor(){
    super()
  }

  create( item){
    console.log('o item foi salvo em mongoDB');
  }
}

module.exports = MongoDB;