let salarioBruto = 5000;
let ir = null;
let inss = null;
let salarioLiquido = null;
// calculando inss
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
  salarioBruto = salarioBruto - inss 

if(salarioBruto < 1903.98){
    ir = 0 - 0
}
if(salarioBruto > 1903.99){
    ir = salarioBruto * 0.075 - 142.80  
}
if(salarioBruto > 2826.66){
    ir = salarioBruto * 0.15 - 354.80
}
if(salarioBruto > 3751.06){
    ir = salarioBruto * 0.225 - 636.13 
}
if(salarioBruto > 4664.68){
    ir = salarioBruto * 0.275 - 869.36
}

salarioLiquido = salarioBruto - ir 

console.log(salarioLiquido)