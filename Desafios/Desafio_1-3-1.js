const usuarios = [
    {nome: 'Carlos', tecnologias: ['Html', 'Css']},
    {nome: 'Jasmine', tecnologias: ['JavaScript', 'Css']},
    {nome: 'Tuane', tecnologias: ['Html', 'Node.js']},
]

const imprimirUsuarios = function() {
    for (let usuario of usuarios) {
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.toString().replace(",", ", ")}`)
    }
}

imprimirUsuarios()