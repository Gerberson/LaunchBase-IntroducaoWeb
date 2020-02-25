const funcionarios = [
    {
        nome: 'Silvio',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9],
    },
    {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0],
    },
    {
        nome: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9],
    },
]

function enviarMenssagem(usuario, saldo) {
    if (saldo >= 0) {
        return `${usuario.nome} você possui saldo POSITIVO de ${saldo}`
    } else {
        return `${usuario.nome} você possui saldo NEGATIVO de ${saldo}`
    }
}

function somaValores(valores) {
    let resultado = 0
    for (let valor of valores) {
        resultado = resultado + valor
    }
    return resultado
}

function calcularSaldo(receitas, despesas) {
    const receita = somaValores(receitas)
    const despesa = somaValores(despesas)
    const saldo = receita - despesa
    return saldo.toFixed(2)
}

function gerarSaldo (usuarios) {
    for(let usuario of usuarios) {
        const saldo = calcularSaldo(usuario.receitas, usuario.despesas)
        const menssagem = enviarMenssagem(usuario, saldo)
        console.log(menssagem)
    }
}

console.log(gerarSaldo(funcionarios))