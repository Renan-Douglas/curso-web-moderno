function inverso(valor) {
    const tipo = typeof valor

    if(tipo == Boolean) {
        return !valor
    } else if (tipo == Number) {
        retunr -valor
    } else  {
        `booleano ou número esperados, mas o parãmetro é do tipo ${tipo}`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(2))
console.log(inverso(-4))