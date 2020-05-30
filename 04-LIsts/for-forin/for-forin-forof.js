const service = require('./service');

async function main() {
  try {
    const result = await service.obterPessoas('a');
    const names = [];

    console.time('time-for');
    for (let index = 0; index < result.results.length -1; index++) {
      const people = result.results[index];
      names.push(people.name);
    }
    console.timeEnd('time-for'); 
    
    console.time('time-forin')
    for (let i in result.results) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.timeEnd('time-forin'); 

    console.time('time-forof');
    for (pessoa of result.results) {
      names.push(pessoa.name);
    }
    console.timeEnd('time-forof');
    
    console.time('time-foreach')
    results.results.forEach((item) => {
      names.push(item.name);
    });
    console.timeEnd('time-foreach');

    console.log('names:',names);

  } catch (error) {
    console.error('interna error : ', error);
  }
}

main()