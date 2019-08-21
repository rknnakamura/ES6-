//As configurações do webpack permite trabalharmos com import de outros arquivos js
// import soma, {subtracao} from './funcoes';
import * as funcoes from './funcoes';

// console.log(soma(5, 5));
// console.log(subtracao(5, 5));

console.log(funcoes.soma(6, 6));
console.log(funcoes.subtracao(3, 5));
