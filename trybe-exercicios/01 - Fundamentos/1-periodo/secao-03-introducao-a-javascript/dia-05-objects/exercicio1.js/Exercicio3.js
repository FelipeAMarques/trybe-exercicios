const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  /* Crie uma função que obtenha o valor da chave de acordo com sua posição no array. */
  const keyValue = (arrai) => {
    let keysEEntradas = Object.entries(arrai.lessons)
    return keysEEntradas
  }
  console.log(keyValue(school))

  /*Crie uma função que retorne a soma do número total de estudantes em todos os cursos.*/
  const somaEstudantes = (objeto) => {
    let valorSomado =0;
    for(index=0; index < objeto.lessons.length; index += 1){ 
        let valor = objeto.lessons[index].students /* aqui peguei o valor do indice de cada parte do array para pegarmos dentro do indice os valores de estudantes */
        valorSomado += valor /* valorSomado = valor + valor somado */
    }
    return valorSomado
}
console.log(somaEstudantes(school))

console.log(school.lessons[0].students)
//Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
const verifyKey =(objeto, chave) => {
    for(index = 0; index < school.lessons.length; index += 1){
 if(objeto.lessons[index][chave] === undefined){
    return false
 }else{
    return true
 }
    }
}

console.log(verifyKey (school, 'shift'))

