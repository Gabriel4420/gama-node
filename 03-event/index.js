const EventEmitter = require('events');

class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor();

const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, function(click){
  console.log('Um usuario clicou', click)
})


/* meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no ok')
let count = 0;

setInterval(() => {
  meuEmissor.emit(nomeEvento, 'no ok' + (count++))
},1000) */

const stdin = process.openStdin();
function main(){
  // executa apenas 1 vez, para emitir varios eventos, é necessario usar o emitter
  return new Promise((resolve,reject) =>{
    stdin.addListener('data', (value) => {
      // console.log(`você digitou: ${value.toString().trim()}`)
      return resolve(value)
  })
 
})}

main().then((resultado) => {
  console.log('resultado', resultado.toString())
})