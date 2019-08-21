//Cada arquivo só pode ter um export default
//Pode se ter uma função default e vários normais, caso queira importar em outro arquivo fica da seguinte forma:
//import soma, { subtracao } from './funcoes';

//Caso tenha varias function e queira importar em uma unica variavel:
//import * as funcoes from './funcoes' 
// Dessa forma funcoes vira um objeto com funcoes

export function soma(a, b) {
    return a + b;
}

export function subtracao(a, b) {
    return a - b;
}