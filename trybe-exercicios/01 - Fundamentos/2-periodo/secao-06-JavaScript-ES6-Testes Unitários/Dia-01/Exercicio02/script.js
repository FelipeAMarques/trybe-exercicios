const media = (n1, n2, n3, n4) => {
    try {
        verificaNum(n1, n2, n3, n4)
        notas = [
        n1,
        n2,
        n3,
        n4,
    ]
    som = 0;
    for (let index = 0; index < notas.length; index += 1){
        som += notas[index]
    } let notaFinal = som / (notas.length)
    return notaFinal
    } catch (error){
        return error.message;
    }
}
const verificaNum = (n1, n2, n3, n4) => {
    if(typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number'){
        throw new Error ('Os valores devem ser numéros!')
    }
}
console.log(media(0, 3, 4, 6));