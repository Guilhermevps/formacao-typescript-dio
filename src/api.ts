export const conta = {
    email: 'guilherme@bds.com',
    senha: 'testetesteteste',
    nome: 'Guilherme'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})