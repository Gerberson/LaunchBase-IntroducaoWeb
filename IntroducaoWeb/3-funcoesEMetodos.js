const alunosDaTurmaA = [
    {
        nome: "Mayk",
        nota: 1.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Gerberson",
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome: "Pedro",
        nota: 9.8
    },
    {
        nome: "Tiago",
        nota: 10
    },
    {
        nome: "João",
        nota: 2
    }
]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
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