function mes(i) {
    switch(i) {
        case 1:
            console.log('Janeiro')
            break
        case 2:
            console.log('Fevereiro')
            break
        case 3:
            console.log('Março')
            break
        case 4:
            console.log('Abril')
            break
        case 5:
            console.log('Maio')
            break
        case 6:
            console.log('Junho')
            break
        case 7:
            console.log('Julho')
            break
        case 8:
            console.log('Agosto')
            break
        case 9:
            console.log('Outubro')
            break
        case 10:
            console.log('Setembro')
            break
        case 11:
            console.log('Novembro')
                break
        case 12:
            console.log('Dezembro')
            break      
        default:
            console.log('Mês inválido')
    }
}

mes(1)
mes(4)
mes(6)
mes(8)
mes(12)
mes(15)
mes(-1)

// nota 7/10

/*  
    opção mais viavel

function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    return mapeamento[--numero];
}
*/