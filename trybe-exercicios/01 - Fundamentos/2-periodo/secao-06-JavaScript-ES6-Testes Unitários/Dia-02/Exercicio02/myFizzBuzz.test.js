

const myFizzBuzz = require('./myFizzBuzz')



describe('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
    it('Deve retornar os valores definidos na função', () => {
        expect(myFizzBuzz(30)).toBe('fizzbuzz')})

    it('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
        expect(myFizzBuzz(3)).toBe('fizz')})

    it('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
        expect(myFizzBuzz(5)).toBe('buzz')})
    
    
    it('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num', () => {
        expect(myFizzBuzz(1)).toBe(1)})
    
    it('Caso num não seja um número, a função retorna false', () => {
        expect(myFizzBuzz('a')).toBe(false)
    })

})