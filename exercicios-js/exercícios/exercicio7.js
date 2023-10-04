function numeros (num, min, max, inc) {
    if (inc == true) {
        if (num >= min && num <= max) {
            return true
        } else {
            return false
        }
    } else if (num < max && num > min) {
        return true
    } else {
        return false
    }
}

console.log(numeros(3, 1, 5))
console.log(numeros(1, 1, 5))
console.log(numeros(1, 1, 5, true))