Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    }else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(3, 6.99)) {
        console.log('Recuperação')
    } else if(0, 2.99) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }

}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.65)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

console.log('Fim')