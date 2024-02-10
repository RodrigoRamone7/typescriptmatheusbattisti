// 3 - FIlter
const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if (n >= 3){
        return n
    }
})

console.log(highNumbers)

const users = [
    {nome: 'Rodrigo', avaliable: true},
    {nome: 'João', avaliable: false},
    {nome: 'Pedro', avaliable: false},
    {nome: 'Paulo', avaliable: true},
]

const avaliableUsers = users.filter((user) => user.avaliable)
const notavaliableUsers = users.filter((user) => !user.avaliable)

console.log(avaliableUsers)
console.log(notavaliableUsers)
