const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let somaNumbers = null;
let mediaAritimetica = null;
let mediaMoreThan20 = null;
let maiorValor = null;
for(let index = 0; index < numbers.length; index += 1) {
    console.log(`${index} - ${numbers[index]}`)}
// somei os numero da array acima ^
for(let index2 =0; index2 < numbers.length; index2 += 1) {
    somaNumbers = somaNumbers + numbers[index2]
}
console.log(somaNumbers)
// media aritimetica abaixo 
mediaAritimetica = somaNumbers / numbers.length

// Se o resultado é maior que 20
if(mediaAritimetica > 20){
mediaMoreThan20 = 'O valor da média aritmética é maior que 20'
} else{
    mediaMoreThan20 = 'O valor da média aritmética é menor ou igual a 20'
};
console.log(mediaMoreThan20);
// for para descobrir o maior valor
for(index3 = 0; index3 < numbers.length; index3 += 1){
    if(numbers[index3] > maiorValor) {
       maiorValor = numbers[index3]
    }
}
console.log(maiorValor)
