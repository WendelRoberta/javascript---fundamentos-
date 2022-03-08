// tipo de dados
//booleanos

//conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero + numeroString);

//Number
//String

console.log(numero + Number(numeroString));

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

//conversão explícita