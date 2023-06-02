const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let somaNumbers = null;
let mediaAritimetica = null;
let mediaMoreThan20 = null;
let maiorValor = null;
let impares = [];

for(let index = 0; index < numbers.length; index += 1) {
    console.log(`${index} - ${numbers[index]}`)}

    // somei os numero da array acima ^

for(let index =0; index < numbers.length; index += 1) {
    somaNumbers = somaNumbers + numbers[index]
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

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > maiorValor) {
       maiorValor = numbers[index]
    }
}
console.log(maiorValor)
// Os numero impares do array 

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !=  0){
        impares.push(numbers[index])
    } 
}
console.log(impares)
