# [DH Fullstack - Desafio Javascript I](https://github.com/DigitalHouseBrasil/FSN-desafio-javascript-I)

- Tema: Sistema escolar
- Tecnologia: Javascript

### O que deverá ser desenvolvido?

Em nosso sistema, um aluno é descrito com as seguintes informações:

- Id
- Nome
- Cursos

Em que um curso é descrito como:

- Nome do curso
- Data de Matricula
- Quantidade de faltas
- Notas

Exemplo:

```
{
  id: number,
  nome: string,
  cursos: [
    {
      nomeDoCurso: string,
      dataMatricula: string (DD/MM/YYYY),
      faltas: number,
      notas: number[],
      }
  ]
};
```

Diante disso, deverá ser desenvolvido as seguintes funções:

```javascript
/*Essa função irá receber uma *string* que é nome do aluno a ser criado.
E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
function adicionarAluno(nome: string) {}

/*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema.
Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
function listarAlunos() {}

/* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
function buscarAluno(nome: string) {}

/* Essa funcionalidade irá permitir, cadastrar um aluno em um curso.
Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
Lembre-se de exibir o feedback para o usuário. */
function matricularAluno(alunoId: number, curso: string) {}

/*
Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
*/
function aplicarFalta(alunoId: number, cursoId: number) {}

/*
Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
*/
function aplicarNota(alunoId: number, cursoId: number, nota: number) {}

/*
Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
*/
function aprovarAluno(alunoId: number, cursoId: number) {}
```

### Requisitos

- As funcionalidades deverão ser criadas no arquivo `index.js`
- Os alunos deverão ser salvos no arquivo `alunos.json`
- Os alunos só podem matriculados nos cursos que estão no arquivo `cursos.json`

### Links utéis

- [Documentação JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Dicas de Map, Filter e Reduce](https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/)
- [Objetos Literais JS](https://tableless.com.br/javascript-objetos-literais-vs-funcoes-construtoras/)
