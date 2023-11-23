import {soma, multiplica} from './soma'

describe('soma', () => {
    it('Deve somar 1 ao número informado', () => {
        const value = soma(1)
        //Arrange e Act
        //Arrange Config que precisa fazer pro teste rodar | Arrange
        //Arrange = value
        //Act Ação que espera que o teste faça | Act
        //Act = soma(1)
        expect(value).toBe(2)
        //
    })

    it('Deve multiplicar o número por dois', () => {
        const value = multiplica(2, 2)
        expect(value).toBe(4)
        //Multiplica por 2 em Act, e espera o resultado 4...
        //Espera o resultado 4 caso tenha sucesso
    })

    it('Deve multiplicar o número por três', () => {
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })

    it('Deve informar um erro, com multiplicador diferente de 2 ou 3', () => {
        const value = multiplica(2, 4)
        expect(value).toBe('Multiplicador não aceito')
    })
})