const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

for (let i = 0; i < filmes.length; i++) {
  console.log(`O título do filme é: ${filmes[i].titulo}, lançado em ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);
  for (let z = 0; z< filmes[i].elenco.length; z++) {
    console.log(`tem no elenco: ${filmes[i].elenco[0]}, ${filmes[i].elenco[1]}, ${filmes[i].elenco[2]}, ${filmes[i].elenco[4]}`);
  }
} 


for (let i in filmes) {
  for (let z of filmes) {
    console.log(`${z.titulo}, lançado em ${z.ano}, dirigido por ${z.diretor}. Elenco: ${z.elenco}`);
  }
}

// escreva seu código abaixo 👇🏻

// const resultado1 = [2, 4, 6, 8];
// const resultado2 = [1, 3, 5, 7];
// const resultado3 = [0, 8, 10, 12];
// const resultado4 = [9, 11, 13, 15];

// const megaSena = [resultado1, resultado2, resultado3, resultado4];

// console.log(megaSena);

// if(megaSena.length === 4) {


//   for(let i = 0; i < megaSena.length; i++){
//       for (let z = 0; z < megaSena[i].length; z++){
//             console.log(`sorteio ${i +1}: ${megaSena[i]}`)
//       }
// } 


// } else {
//     console.log('É necessário alterar o número de itens do array');
// }


//exercicio 2

// const resultado1 = [2, 4, 6, 8];
// const resultado2 = [1, 3, 5, 7];
// const resultado3 = [0, 8, 10, 12];
// const resultado4 = [9, 11, 13, 15];

// const megaSena = [resultado1, resultado2, resultado3, resultado4];

// console.log(megaSena);

// if(megaSena.length === 4) {


//   for(let i in megaSena){
//       for (let z = 0; z < megaSena[i].length; z++){
//             console.log(`sorteio ${Number(i) + 1}: ${megaSena[i]}`)
//       }
// } 


// } else {
//     console.log('É necessário alterar o número de itens do array');
// }

//exercicio 3

// const resultado1 = [2, 4, 6, 8];
// const resultado2 = [1, 3, 5, 7];
// const resultado3 = [0, 8, 10, 12];
// const resultado4 = [9, 11, 13, 15];

// const megaSena = [resultado1, resultado2, resultado3, resultado4];

// console.log(megaSena);

// if(megaSena.length === 4) {

//   //i é a chave e negaSena é o valor
//   for(let i in megaSena){

//       //elemento do array
//       for (let z of megaSena[i]){
//             console.log(megaSena[i]);
//       }
// } 


// } else {
//     console.log('É necessário alterar o número de itens do array');
// }