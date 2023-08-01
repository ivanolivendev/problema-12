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

    // acima tenho a 1 abordagem a qual desisti, essa segunda é baseada numa sugestão da internet,
    //porém assim como a segunda roda e é reprovada nos testes.

    let caracteres = input.split('')
    // transforma minha palavra num array de caracteres para tratar o problema
    // com metodos de array

    let primeiraLetra = caracteres[0]
    //analiso o primeiro caracter
    let restante = caracteres.slice(1, caracteres.length)
    //analiso os demais caraceteres

    //1º Situação: primeira letra é minuscula e o restante é minuscula
    let primeiraMinusculaRestoMaiuscula = restante.every((letra) => {
        return letra === letra.toUpperCase();
    }) && primeiraLetra === primeiraLetra.toLowerCase()

    // 2º Situação: todas as letras são minusculas
    let tudoMinuscula = primeiraLetra === primeiraLetra.toLowerCase() &&
        restante.every((letra) => {
            return letra === letra.toLowerCase()
        })

    // 3 situação: todas as letras são maisculas
    let tudoMaiscula = primeiraLetra === primeiraLetra.toUpperCase() &&
        restante.every((letra) => {
            return letra === letra.toUpperCase()
        })

    // nesse ponto jogo as possibilidades dentro de uma codicional,
    // dependendo de onde cair, jogo dentro de uma condicional

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

// como falado, o resultado é correto, porém nos testes do hackEanker ele não passa