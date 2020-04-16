/** Map Implementation */
Array.prototype.map2 = function(callback){
    let array = []
    for(let i = 0; i < this.length; i++){
        array.push(callback(this[i], i, this))
    }
    return array
}

/** Array of products in string format */
const carrinho = ['{"nome": "Borracha", "preco": 3.45}',
                  '{"nome": "Lápis", "preco": 2.31}']

/** Change from String to JSON, and extract the price from JSON */
const paraObjeto = json => JSON.parse(json)
const soPreco = produto => produto.preco

console.log(carrinho.map2(paraObjeto).map2(soPreco))