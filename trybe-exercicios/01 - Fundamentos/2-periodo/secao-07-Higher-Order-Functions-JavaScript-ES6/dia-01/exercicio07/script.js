const checkNumber = (meuNum, num) => {if (meuNum === num) {return 'Seu dia de sorte'}
return 'tenta de novo '}

const numGenerator = (meuNum, callback) => {
    const loteryNum = Math.floor((Math.random()* 5) + 1)

    return callback(meuNum, loteryNum)
}

console.log(numGenerator(3, checkNumber));
