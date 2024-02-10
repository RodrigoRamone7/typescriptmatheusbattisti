// 6 - Destructuring
const fruits = ['Maçã', 'Laranja', 'mamão']

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)
console.log(f3)

const productDetais = {
    nome: 'Mouse',
    price: 39.99,
    category: 'Perifericos',
    color: 'Cinza'
}

const {nome: productName, price, category: productCategory, color} = productDetais

console.log(`O nome do produto é ${productName}, custa R$ ${price}, pertence a categoria ${productCategory}.`)