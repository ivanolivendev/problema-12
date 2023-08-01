function processData(input) {

    // let primeiroCaracter = ;
    // let restanteString = "";

    // let maisculo = (arr) => {
    //     return arr.toUpperCase()
    // }

    // let minusculo = (arr) => {
    //     return arr.toLowerCase()
    // }

    // for (let x = 0; x < input.length; x++) {
    //     primeiroCaracter = input.charAt(0)
    //     restanteString += input.charAt(x + 1)

    // }

    // if (primeiroCaracter === minusculo(primeiroCaracter)
    //     && restanteString === maisculo(restanteString)) {
    //     console.log(maisculo(primeiroCaracter) + minusculo(restanteString))

    // } else if (primeiroCaracter === maisculo(primeiroCaracter)
    //     && restanteString === maisculo(restanteString)) {
    //     console.log(minusculo(primeiroCaracter) + minusculo(restanteString))

    // } else if (primeiroCaracter === minusculo(primeiroCaracter)
    //     && restanteString === minusculo(restanteString)) {
    //     console.log(minusculo(primeiroCaracter) + minusculo(restanteString))

    // }

    // console.log(restanteString)
    // console.log(primeiroCaracter)

    const caracteres = input.split('')

    let primeiraLetra = caracteres[0]
    let restante = caracteres.slice(1, caracteres.length)

    let primeiraMinusculaRestoMaiuscula = restante.every((letra) => {
        return letra === letra.toUpperCase();
    }) && primeiraLetra === primeiraLetra.toLowerCase()

    let tudoMinuscula = primeiraLetra === primeiraLetra.toLowerCase() &&
        restante.every((letra) => {
            return letra === letra.toLowerCase()
        })

    let tudoMaiscula = primeiraLetra === primeiraLetra.toUpperCase() &&
        restante.every((letra) => {
            return letra === letra.toUpperCase()
        })

    if (primeiraMinusculaRestoMaiuscula) {
        let novoPrimeira = primeiraLetra.toUpperCase();
        let novoRestante = restante.join("")
        console.log(novoPrimeira + novoRestante.toLowerCase())
    }
    else if (tudoMaiscula) {
        let novaprimeiraLetra = primeiraLetra.toLowerCase();
        let novoRestante = restante.join("")
        console.log(novaprimeiraLetra + novoRestante.toLowerCase())
    }
    else if (tudoMinuscula) {
        let novaprimeiraLetra = primeiraLetra.toLowerCase()
        let novoRestante = restante.join("")
        console.log(novaprimeiraLetra + novoRestante.toLowerCase())
    }
}

processData("cAPS")