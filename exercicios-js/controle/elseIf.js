const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    } else {
        console.log('Reprovado com ' + nota)
    }
}
imprimirResultado(9)
imprimirResultado(6)
imprimirResultado('Epa!') // Cuidado !!!