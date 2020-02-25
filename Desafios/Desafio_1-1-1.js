const nome = 'Carlos'
const peso = 200
const altura = 1.88

const imc = function() {
    return peso / (altura * altura)
}

const mensagem = function(imc) {
    if(imc >= 30) {
        return `${nome} você está acima do peso`
    } else {
        return `${nome} você não está acima do peso`
    }
}

const calcularImc = function() {  
   return console.log(mensagem(imc()))
}

console.log(calcularImc())