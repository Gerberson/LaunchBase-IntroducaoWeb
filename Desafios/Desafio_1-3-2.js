const funcionarios = [
    { nome: 'Carlos', tecnologias: ['Html', 'Css'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'Css'] },
    { nome: 'Tuane', tecnologias: ['Html', 'Node.js'] },
]

const percorrerUsuarios = function(usuarios) {
    for(let usuario of usuarios) {
        if (checaSeUsuarioUsaCss(usuario)) {
            console.log(`${usuario.nome} trabalha com CSS`)
        } else {
            console.log(`${usuario.nome} não trabalha com CSS`)
        }
    }
}

const checaSeUsuarioUsaCss = function(usuario) {
    

    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] == "Css") {
            return true   
        }
    }
    return false
}

console.log(percorrerUsuarios(funcionarios))