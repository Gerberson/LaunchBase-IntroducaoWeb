const alunosDaTurmaA = [
    {
        nome: "Mayk",
        nota: 7,
    },
    {
        nome: "Diego",
        nota: 10,
    },
    {
        nome: "Gerberson",
        nota: 2,
    }
]

const alunosDaTurmaB = [
    {
        nome: "Pedro",
        nota: 9.8,
    },
    {
        nome: "Tiago",
        nota: 10,
    },
    {
        nome: "João",
        nota: 2,
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for(let i = 0; i < alunos.length; i++) {
        soma += alunos[i].nota;
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if(media > 5) {
        console.log(`A media da ${turma} foi de ${media}. Parabens!`)
    } else {
        console.log(`A media da ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, "turmaA")
enviaMensagem(media2, "turmaB")

function marcarComoReprovado(aluno) {
    aluno.reprovado = false
    if (aluno.nota < 5) {
        aluno.reprovado = true
    }
}

marcarComoReprovado(alunosDaTurmaA)
marcarComoReprovado(alunosDaTurmaB)

function enviarMenssagemReprovado(aluno) {
    if(aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} está reprovado"`)
    }
}

function alunoReprovado(alunos) {
    const list = []
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMenssagemReprovado(aluno)
        list.push(aluno)
    }
    console.table(list)
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)