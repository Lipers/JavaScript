/** Implementation */
Array.prototype.Impl_reduce = function(callback, iniValue){
    const iniIndx = iniValue ? 0 : 1
    let acc = iniValue || this[0]
    for(let i = iniIndx; i < this.length; i++){
        acc = callback(acc , this[i], i , this)
    }
    return acc
}

/** Products */
const products = [
    {nome: 'Tablet', price: 2131.3, fragile: true},
    {nome: 'Laptop', price: 2500, fragile: false},
    {nome: 'CellPhone', price: 3150, fragile: true}]

//Turning into price
const price = products.map((prod) => prod.price)

//Logging it
console.log(price.Impl_reduce((acc,prod) => acc + prod))

