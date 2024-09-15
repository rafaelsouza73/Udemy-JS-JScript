/*
Luiz Otavio Miranda tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.925925925924
*/
const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
const anoAtual = 2024
let imc; // peso/(altura*altura);
imc = (peso/(altura*altura));
console.log(imc);
let anoNascimento;
anoNascimento = (anoAtual-idade);
console.log(anoNascimento);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log('Luiz Otavio nasceu em', anoNascimento, '.');
// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`Luiz Otavio nasceu em ${anoNascimento}.`);
