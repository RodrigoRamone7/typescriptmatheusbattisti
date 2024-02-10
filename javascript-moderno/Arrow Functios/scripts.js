// 2 - Arrow Funcions
const sum = function sum(a, b){
    return a + b
}

const arrowSum = (a,b) => a + b

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (nome) => {
    if(nome){
        return 'Olá, ' + nome + '!'
    } else {
        return 'Olá!'
    }
}

console.log(greeting('Rodrigo'))
console.log(greeting())

const testeArrow = () => console.log('Testou!')
testeArrow()

const user = {
    nome: 'Theo',
    sayUserName(){
        setTimeout(function(){
            console.log(this)
            console.log('Username: ' + this.nome)
        }, 500)
    },
    sayUserNameArrow(){
        setTimeout(() => {
            console.log('Username: ' + this.nome)
        }, 700)
    }
}
user.sayUserName()
user.sayUserNameArrow()