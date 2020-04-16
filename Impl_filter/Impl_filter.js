/** Implementation */
Array.prototype.filtra = function(callback){
    const array = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
            array.push(this[i])
    }
    return array
}

/** Products */
const products = [{nome: 'Tablet', price: 2131.3, fragile: true},
                  {nome: 'Laptop', price: 2500, fragile: false},
                  {nome: 'CellPhone', price: 3150, fragile: true}]


/** Filters */
const caro = p => p.price > 2300
const fragil = p => p.fragile

/** Logging */
console.log(products.filtra(caro).filtra(fragil))