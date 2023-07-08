/*

  Criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- Crie uma *função* que irá calcular a média das notas de cada aluno;
- Supondo que a média, para esse concurso é *7*, verifique *se*
 cada aluno obteve sucesso ou não em entrar no concurso
 e mostre uma mensagem na tela.

*/

let students = [
  {
    nome: "Maria",
    nota1: 7,
    nota2: 5,
  },
  {
    nome: "João",
    nota1: 8,
    nota2: 9,
  },
  {
    nome: "Terezinha",
    nota1: 10,
    nota2: 9,
  },
  {
    nome: "Oswaldo",
    nota1: 6,
    nota2: 3,
  }
]

function calculoMedia(nota1, nota2) {
  return (nota1 + nota2)/2
}

function printAproved(aluno) {
  return `
  O(a) aluno(a) ${aluno.nome} teve a média de ${calculoMedia(aluno.nota1 + aluno.nota2)}
  e foi APROVADO no concurso!
  `
}

function printReproved(aluno) {
  return `
  O(a) aluno(a) ${aluno.nome} teve a média de ${calculoMedia(aluno.nota1 + aluno.nota2)}
  e foi REPROVADO no concurso!
  `
}

for (let aluno of students) {
  if (calculoMedia >= 6) {
    let message = printAproved(aluno)
    alert(message)
  } else {
    let messageReproved = printReproved(aluno)
    alert(messageReproved)
  }
}