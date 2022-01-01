/*
const soma = require('./pratica.js');

describe('Primeiro teste', () => {
    it('Teste se o retorno com os parâmetros 4 e 5 é igual a 9', () => {
        expect(soma(4, 5)).toBe(9);
    });
    it('Teste se o retorno com os parâmetros 0 e 0 é igual a 0', () => {
        expect(soma(0, 0)).toBe(0);
    });
    it('Teste se a função sum lança um erro com os parâmetros são 4 e "5"', () => {
        expect(() => {
            soma(4,'5') 
        }).toThrow();
    });
    it('Teste se a mensagem de erro é "parameters must be numbers"', () => {
        expect(() => {
            soma(4,'5') 
        }).toThrowError(new Error('parameters must be numbers'));
    })
});

const myRemove = require('./pratica.js');

describe('Segundo teste', () => {
    it('Verifique se [1, 2, 3, 4], 3 retorna o esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Verifique se [1, 2, 3, 4], 3 não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Verifique se [1, 2, 3, 4], 5 retorna o esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
})
*/

const fizzBuzz = require('./pratica.js');

describe('Terceiro teste', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(fizzBuzz(45)).toBe('fizzbuzz');
    });
    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(fizzBuzz(21)).toBe('fizz');
    });
    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(fizzBuzz(10)).toBe('buzz');
    });
    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(fizzBuzz(16)).toBe(16);
    });
    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(fizzBuzz('olá')).toBe(false);
    });
});