"use strict";

// *** Vetor ***
var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); //Para cada execu��o � pego o valor total do retorno + next

var sum = arr.reduce(function (total, next) {
  return total + next;
}); //0
//1
//1
//2
//3
//3
//6
//4
//10
//5
//15
//6
//21
//7
//Resultado: 28

console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0; //Condi��o deve sempre retornar true or false
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 2;
});
console.log(find); // *** Class ***
// class List {
//     constructor(){
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(data);
//     }
// }
// class TodoList extends List {
//     constructor(){
//         super();
//         this.usuario = 'Renato';
//     }
//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo todo');
// }
// MinhaLista.mostraUsuario();
