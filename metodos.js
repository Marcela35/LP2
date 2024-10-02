//push, shift, sort

let frutas = ["maçã", "banana", "morango", "melancia"];
let verdura = ["rabanete", "cenoura"]
let carrinho = []
//adiciona itens ao carrinho
carrinho.push(frutas[0], frutas[1], frutas[3], verdura[1])
console.log(carrinho);
console.log("");

//ordena os itens no carrinho em ordem alfabetica
carrinho.sort()
console.log("Carrinho ordenado");
console.log(carrinho);
console.log("");

//remove o primeiro item
carrinho.shift()
console.log("tirar o primeiro produto do carrinho");
console.log(carrinho);
