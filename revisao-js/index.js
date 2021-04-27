const fs = require('fs');
const alunos = require('./alunos.json');
const cursos = require('./cursos.json');

function adicionarAluno(nome) {
  const aluno = {
    id: Math.round(Math.random() * 1000 + 1),
    nome, // = nome: nome
    cursos: [],
  };
  alunos.push(aluno);
  fs.writeFileSync(
    '/home/paulanelo/dev/dh/0221CDFSPCN03BRED/0221CDFSPCN03BRED/revisao-js/alunos.json',
    JSON.stringify(alunos),
    (e) => {
      console.log('deu errado');
    }
  );

  return 'Aluno com id ' + aluno.id + ' inserido com sucesso';
}

function listarAlunos() {
  for (let i = 0; i < alunos.length; i++) {
    console.log(
      'nome: ' + alunos[i].nome + '\nìd: ' + alunos[i].id + '\n-----'
    );
  }
}

// console.log(listarAlunos());

function buscarAluno(valor) {
  let aluno = null;
  if (typeof valor == 'number') {
    aluno = alunos.find((aluno) => {
      return aluno.id === valor;
    });
  } else {
    aluno = alunos.filter((aluno) => {
      return aluno.nome === valor;
    });
  }

  if (!aluno || !aluno.length) {
    aluno = 'O aluno não foi encontrado';
  }

  return aluno;
}

console.log(buscarAluno('Paulo'));
console.log(buscarAluno(300));
