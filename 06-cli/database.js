const { readFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
class Database{
  constructor(){
    this.NOME_ARQUIVO = 'herois.json'
  }
  async obterDadosArquivo(){
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');
    return JSON.parse(arquivo.toString());
  }
  escreverArquivo(){
    await writeFileAsync(this.FILENAME, JSON.stringify(dados));
    return true;
  }
  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivo();
    //workaround para simular um id
    const id = heroi.id <= 2 ? heroi.id : Date.now();
    const heroiComId = {
      ...heroi,
      id,
    };

    return await this.escreverArquivo([...dados, heroiComId]);
  }

  async listar(id){
    const dados = await this.obterDadosArquivo()
    const dadosFiltrados = dados.filter(item => id ? item.id === id : true);
    return dadosFiltrados;
  }

}

module.exports = new Database();