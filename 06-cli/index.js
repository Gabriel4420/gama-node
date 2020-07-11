const Commander = require('commander');
const Database = require('./database');
const Heroi = require('./heroi');


async function main() {
  Commander.version('v1')
  .option('-n, --nome [value]',"Nome do Herói")
  .option('-p, --poder [value]',"Poder do Herói")
  .option('-i, --id [value]',"Id do Herói")

  .option('-c, --cadastrar',"Cadastrar um Herói")
  .option('-l, --listar',"Listar um Herói")
  .option('-r, --remove [value]',"Deleta um Herói pelo id")
  .parse(process.argv);
  const heroi = new Heroi(Commander)
  try {
    if(Commander.cadastrar){
     
      const resultado = await Database.cadastrar(heroi)

      if(!resultado){
        console.error('Heroi não foi cadastrado');
        return;
      }
      console.log('Heroi cadastrado com sucesso');
    }

    if(Commander.listar){
      const resultado = await Database.listar();

      if(resultado.length <= 0)
        console.error('Heroi não encontrado');
      else
        console.log('Heroi encontrado com sucesso' , resultado);
    }

    if(Commander.remove){
      const resultado = await Database.remover(heroi.id);

      if(!resultado)
        console.error('Não foi possivel remover o heroi')
      else  
        console.log('Heroi removido com sucesso')
    }
  } catch (error) {
      console.error('Deu Ruim', error);
  }
}

main()