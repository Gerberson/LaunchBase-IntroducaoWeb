const funcionario = {
    nome: 'Pedro Soares',
    idade: 29,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop',
        },
        {
            nome: 'Phython',
            especialidade: 'Data Science',
        },
        {
            nome: 'JavaScripts',
            especialidade: 'Web/Mobile',
        },
    ],
}

console.log(`O usuário ${funcionario.nome} tem ${funcionario.idade} anos e usa a tecnologia ${funcionario.tecnologias[0].nome} com especialidade em ${funcionario.tecnologias[0].especialidade}`)