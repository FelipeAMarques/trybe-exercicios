const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let somaNumbers;
let mediaAritica
let mediaMoreThan20
// somei os numero da array acima ^
for(let index = 0; index < numbers.length; index += 1) {
    console.log(`${index} - ${numbers[index]}`)}
// media aritimetica abaixo 
mediaAritica = somaNumbers / 10;
// Se o resultado é maior que 20
if(mediaAritica > 20){
mediaMoreThan20 = 'O valor da média aritmética é maior que 20'
} else{
    mediaMoreThan20 = 'O valor da média aritmética é menor ou igual a 20'
};
console.log(mediaMoreThan20);
// for para descobrir o maior valor
for(let index = 0; index < numbers.length; index += 1) {
    console.log(`${index} - ${numbers[index]}`)
}
