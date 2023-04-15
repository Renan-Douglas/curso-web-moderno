function multiplicacao(a, b) {
    if (a < 0 || b < 0) {
        return "Erro, impósivel multiplicar números negativos"
    } else {
        return a * b
    }
}

console.log(multiplicacao(2, 5))
console.log(multiplicacao(3, 2))
console.log(multiplicacao(2, 0))
console.log(multiplicacao(-1, 3))
console.log(multiplicacao(2, -5))