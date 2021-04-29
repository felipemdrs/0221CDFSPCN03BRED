const fs = require('fs');
const alunos = require('./alunos.json');
const cursos = require('./cursos.json');

function salvarAlunos(alunos) {
  fs.writeFileSync(
    '/home/paulanelo/dev/dh/0221CDFSPCN03BRED/0221CDFSPCN03BRED/revisao-js/alunos.json',
    JSON.stringify(alunos),
    (e) => {
      console.log('deu errado');
    }
  );
}

function adicionarAluno(nome) {
  const aluno = {
    id: Math.round(Math.random() * 1000 + 1),
    nome, // = nome: nome
    cursos: [],
  };
  alunos.push(aluno);
  salvarAlunos(alunos);

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

  if (!aluno || (Array.isArray(aluno) && !aluno.length)) {
    aluno = false;
  }

  return aluno;
}

// console.log(buscarAluno('Paulo'));
// console.log(buscarAluno(300));

function matricularAluno(alunoId, cursoId) {
  const alunoEncontrado = buscarAluno(alunoId);

  if (!alunoEncontrado) {
    return 'Aluno não cadastrado';
  }

  const cursoEncontrado = cursos.find((curso) => {
    return cursoId === curso.id;
  });
  // equivalente
  // const cursoEncontrado = {};
  // for (let i = 0; i < cursos.length; i++) {
  //   if(cursos[i] === cursoId) {
  //     cursoEncontrado = cursos[i];
  //   }
  // }
  if (!cursoEncontrado) {
    return 'Esse curso não existe';
  }
  const curso = {
    cursoId: cursoEncontrado.id,
    nomeDoCurso: cursoEncontrado.nome,
    dataMatricula: new Date().toISOString(),
    faltas: 0,
    notas: [],
  };
  alunoEncontrado.cursos.push(curso);

  const alunoIndex = alunos.indexOf(alunoEncontrado);
  alunos.splice(alunoIndex, 1, alunoEncontrado);

  salvarAlunos(alunos);
  return 'O aluno foi matriculado com sucesso';
}

// console.log(matricularAluno(300, 2));

function aplicarFalta(alunoId, cursoId) {
  const alunoEncontrado = buscarAluno(alunoId);

  if (!alunoEncontrado) {
    return 'Aluno não cadastrado';
  }

  const cursoAluno = alunoEncontrado.cursos.find((curso) => {
    return curso.cursoId === cursoId;
  });

  if (!cursoAluno) {
    return 'O aluno não está matriculado nesse curso';
  }

  cursoAluno.faltas += 1; // ++ / cursoAluno.faltas = cursoAluno.faltas + 1;

  const alunoIndex = alunos.indexOf(alunoEncontrado);
  alunos.splice(alunoIndex, 1, alunoEncontrado);

  salvarAlunos(alunos);

  return 'Falta aplicada com sucesso';
}

// console.log(aplicarFalta(300, 1));
