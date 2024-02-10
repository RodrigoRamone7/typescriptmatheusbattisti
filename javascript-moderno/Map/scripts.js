// 4 - Map
const produtos = [
    {nome: 'Camisa',
    price: 10.99,
    category: 'Roupas'
    },
    {nome: 'Chaleira eletrica',
    price: 49.99,
    category: 'Eletro'
    },
    {nome: 'Fogão',
    price: 400,
    category: 'Eletro'
    },
    {nome: 'Calça jeans',
    price: 10.99,
    category: 'Roupas'
    },
    
]

produtos.map((produto) => {
    if(produto.category === 'Roupas'){
        produto.onSale = true
    }
})

console.log(produtos)
