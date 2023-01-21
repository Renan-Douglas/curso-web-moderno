const escola = "Cod3r"

console.log(escola.charAt(4)) // Obter esse valor comk base na posição da string
console.log(escola.charAt(6))
console.log(escola.charCodeAt(3)) // Código unicode
console.log(escola.indexOf('r')) // Busca por um caractere e retorna sua posição

console.log(escola.substring(1)) // Mostra a sting da posição passada adiante
console.log(escola.substring(0, 3)) // Mostra os caracteres dentre os valores passados

console.log('escola '.concat(escola).concat("!")) // Concatenação ou juntando
console.log('escola ' + escola + "!") // Concatenação ou juntando
console.log(escola.replace(3, "e")) // Substitui o a posição passada pelo catactere escolhido

console.log("Ana,Maria,Pedro".split(","))