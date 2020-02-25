const nome = "Pedro"
const sexo = "M"
const idade = 48
const contribuicao = 50

const aprovarPorSexoEIdade = function() {
    if (sexo === "M" && idade >= 35 || sexo === "F" && idade >= 30) {
        return true
    } else {
        return false
    }
}

const somarIdadeComTempo = function() {
    const soma = idade + contribuicao
    if (sexo === "M" && soma >= 95 || sexo === "F" && soma >= 85) {
        return true
    } else {
        return false
    }
}

const enviarMensagem = function() {
    if(aprovarPorSexoEIdade() === true && somarIdadeComTempo() === true) {
        return `${nome}, você pode se aposentar!`
    } else {
        return `${nome}, você ainda não pode se aposentar!`
    }
}

console.log(enviarMensagem())