/**
 * Object Short Syntax
 */

// const nome = 'Renato';
// const idade = 27;

// const usuario = {
//     nome,
//     idade,
//     empresa: 'Objective'
// };

// console.log(usuario);

/**
 * Template literals
 */

// const nome = 'Renato';
// const idade = 25;

// console.log('Meu nome é '+ nome +' e tenho '+ idade +' anos.');

// Com template literals
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);


/**
 * Operadores rest/spread
 */

// REST
// Serve para pegar o resto da propriedade

// Exemplo 01
// const usuarioRest = {
//     nome: "Renato",
//     idade: 27,
//     empresa: "EmpresaX"
// };

// const { nome, ...resto } = usuarioRest;
// console.log(nome);
// console.log(resto);

// Exemplo 02

// const arr = [1, 2, 3, 4];

// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// Exemplo 03 - Passagem de parametro

// Normal
// function soma(a, b) {
//     return a + b;
// }

// console.log(soma(2, 5));

// Com Rest

// function somaComRest(...params) {
//     return params.reduce((total, next) => total + next);
// }

// console.log(somaComRest(2, 5, 3));

/**
 * SPREAD: Propagar/Repassar as informações de um obj ou um array para uma outra estrutura de dados
 */

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const usuarioSpread = {
//     nome: 'Renato',
//     idade: 27,
//     empresa: 'EmpresaX'
// }

//Utilizado para trocar um atributo dentro de um objeto
// const usuario2 = { ...usuarioSpread, nome: 'OutroCara'};

// console.log(usuario2);

/**
 * Desestruturação
 */

// console.log('Desestruturação');
// const usuario = {
//     nome: 'Renato',
//     idade: 27,
//     endereco: {
//         cidade: 'Maringá',
//         estado: 'PR'
//     }
// };

// console.log(usuario);

/**
 * Sem desestruturação
 */

// Necessário 3 linhas
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

/**
 * Com desestruturação
 */
 

// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

// console.log('Parametro de Function com desestruturação');

// function mostraNome({ nome }) {
//     console.log(nome);
// }

// mostraNome(usuario);

// *** Valores padrões ***

// //Retorno NaN: Não foi identificado o valor
// console.log('Valores padrões');
// const soma = (a = 1, b = 2) => a + b;

// console.log(soma());
// console.log(soma(5, 5));

// *** Arrow Function ***

// const arr = [1, 2, 3];

// console.log('Sem arrow function');
// // Sem arrow function
// //A declaração de "function" é uma function anônima, o melhor lugar para utilizar arrow functions
// const newArr = arr.map(function(item){
//     return item * 2;
// });

// console.log(newArr);

// console.log('Com arrow function');
// // Estrutura básica
// const newArrComArrow = arr.map((item) => {
//     return item * 3;
// });
// console.log(newArrComArrow);

// console.log('Com arrow function reduzido');
// // Quando possuir apenas um parametro e um retorno, é possível reduzir mais o fonte
// const newArrComArrowReduzido = arr.map(item => item * 5);
// console.log(newArrComArrowReduzido);

// //Criar function apartir de uma constante(Não recomendado)
// //Para retorno de objeto, não é possivel retornar direto devido que as chaves é utilizado para o corpo da function, para isso é necessario a utilização dos parenteses
// const teste = () => ({
//     nome: 'Renato'
// });
// console.log(teste());

// //Retorno simples
// const teste2 = () => [1, 2, 3];
// console.log(teste2());

// *** Vetor ***
// const arr = [1, 2, 3, 4, 5, 6, 7];

// const newArr = arr.map(function(item) {
//     return item * 2;
// });

// console.log(newArr);

// //Para cada execução é pego o valor total do retorno + next
// const sum = arr.reduce(function(total, next){
//     return total + next;
// })

// console.log(sum);

// const filter = arr.filter(function(item) { 
//     return item % 2 === 0; //Condição deve sempre retornar true or false
// });

// console.log(filter);

// const find = arr.find(function(item) {
//     return item === 2;
// });

// console.log(find);

// *** Class ***

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