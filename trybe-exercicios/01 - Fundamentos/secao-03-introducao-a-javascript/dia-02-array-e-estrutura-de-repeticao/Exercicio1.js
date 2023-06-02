const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let somaNumbers;
let mediaAritica
let mediaMoreThan20
// somei os numero da array acima ^
somaNumbers = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
// media aritimetica abaixo 
mediaAritica = somaNumbers / 10;
// Se o resultado é maior que 20
if(mediaAritica > 20){
mediaMoreThan20 = 'O valor da média aritmética é maior que 20'
} else{
    mediaMoreThan20 = 'O valor da média aritmética é menor ou igual a 20'
};
console.log(mediaMoreThan20);
