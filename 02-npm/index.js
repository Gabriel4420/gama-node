/* Objetivos >>

0 - Obter um usuario
1 - Obter o numero de telefone de um usuario a partir de seu ID
2 - Obter o endereço do usuario pelo ID

*/
// importamos um modulo interno do nodeJS
const util = require('util');

const obterEnderecoAsync = util.promisify(obterEndereco);


function obterUsuario() {
  //quando der algum problema -> reject(erro)
  // quando sucess -> RESOLVE
  return new Promise(function(resolve,reject){
    setTimeout(function () {
      
      //return reject(new Error('fudeo de vez'))

      return resolve({
        id:1,
        nome:'Aladin',
        dataNascimento: new Date()
      })
    }, 1000)
  })  
  
  
}

function obterTelefone(idUsuario){
    return new Promise(function resolverPromise(resolve,reject){
      setTimeout(()=>{
        return resolve({
          telefone:'99256-0812',
          ddd:17
        })
      }, 2000)
    })
    
}

function obterEndereco(idUsuario, callback){
  setTimeout(() => {
    return callback(null,{
      pais:'Brasil',
      estado:'São Paulo',
      cidade:'Mirassol',
      rua:'Rua Natal Lopes,',
      numero:3540,
      bairro:'Regissol'
    })
  },2000)

}
// 1° passo: adicionar a palavra async => automaticamente retorna uma promisse
main();
async function main(){
  try {
    console.time('medida-promise')
    const usuario = await obterUsuario();
    /* const telefone = await obterTelefone(usuario.id);
    const endereco = await obterEnderecoAsync(usuario.id); */
    const resultado = await Promise.all([
      obterTelefone(usuario.id), 
      obterEnderecoAsync(usuario.id)
    ])
    const endereco = resultado[1];
    const telefone = resultado[0];
    console.log(`
    Nome: ${usuario.nome}
    Telefone: (${telefone.ddd}) ${telefone.telefone}
    Endereço: ${endereco.rua}${endereco.numero}
    Bairro: ${endereco.bairro}
    Cidade: ${endereco.cidade}
    Estado: ${endereco.estado}
    Pais: ${endereco.pais}`);
    console.timeEnd('medida-promise')

  } catch (error) {
    console.error('deu rim',error)
  }
}

/* const usuarioPromise = obterUsuario()
//para manipular o sucesso, usamos a função .then 
// para erros, usamos .catch

//conceito de pipelines

// usuario -> telefone -> last -> telefone 

usuarioPromise
.then(function(usuario){
  return obterTelefone(usuario.id)
  .then(function resolverTelefone(result){
    return{
      usuario: {
        nome:usuario.nome,
        id: usuario.id
      },
      telefone: result
    }
  })
})
.then(function (resultado){
  const endereco = obterEnderecoAsync(resultado.usuario.id)
  return endereco.then(function resolverEndereco(result){
    return {
      usuario:resultado.usuario,
      telefone:resultado.telefone,
      endereco:result
    }
  });
})
.then(function(resultado){
  console.log(`
  Nome: ${resultado.usuario.nome}
  Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
  Endereço: ${resultado.endereco.rua}${resultado.endereco.numero}
  Bairro: ${resultado.endereco.bairro}
  Cidade: ${resultado.endereco.cidade}
  Estado: ${resultado.endereco.estado}
  Pais: ${resultado.endereco.pais}
  
  `)
})
.catch(function(error){
  console.error('Fudeo', error);
})
 */
//padrão callback
/* function resolverUsuario(erro, usuario){
    console.log('usuario:', usuario)
} */
 
/* obterUsuario(function resolverUsuario(error, usuario){

  // Em JS ==> null || "" || 0 === false

  if(error){
    console.error('DEU RUIM em USUARIO', error)
    return;
   }
   else{
     console.log('Usuario:',usuario.nome)
   }

   obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
    if(error1){
      console.error('DEU RUIM em TELEFONE', error1)
      return;
     }else{
       console.log('Telefone:',telefone.ddd,telefone.telefone)
     } 
   })

   obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
    if(error2){
      console.error('DEU RUIM em ENDEREÇO', error2)
      return;
     }else{
       console.log('Endereço:',endereco.rua,'numero:',endereco.numero,endereco.cidade)
     } 
   })
});
 */
//const telefone = obterTelefone(usuario.id)

//console.log('usuario',usuario)
//console.log('telefone')