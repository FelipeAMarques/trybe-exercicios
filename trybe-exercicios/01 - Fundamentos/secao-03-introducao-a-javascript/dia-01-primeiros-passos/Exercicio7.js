let salarioBruto = 3000;
let ir = null;
let inss = null;
let salarioLiquido = null;

if(salarioBruto < 1556.94){
    inss = salarioBruto * 0.08 
}
if(salarioBruto >= 1556.95){
    inss = salarioBruto * 0.09
}
if(salarioBruto >= 2594.93){
    inss = salarioBruto * 0.11
}
if(salarioBruto > 5189.82){
    inss = 570.88
}
console.log(inss)