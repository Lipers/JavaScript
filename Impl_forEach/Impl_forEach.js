
/** Implementação forEach */
Array.prototype.paraCada = paraCada = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

/** Array exemplo */
const aprovados = ['Agatha', 'Aldo', 'Bruno']

const exibirAprovados = (a, indice) => (console.log(indice, a))

aprovados.paraCada(exibirAprovados)