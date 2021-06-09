const models = require('./models')

const { Op } = require('sequelize')

// findAll
// findOne

//
// >  gt (greater)
// >= gte (greater or equals)
// < lt (lowert)
// <= lte 
// = eq (equalz)

async function teste() {
    const alunos = await models.Aluno.findAll({
        where:  {
            [Op.or]: {
                nome: {
                    [Op.like]: 'João%'
                },
                idade: {
                    [Op.lt]: 18
                }
            }
        }
    })
    console.log(alunos)
}

async function listarDisciplinas() {
    const disciplinas = await models.Disciplina.findAll()
    console.log(disciplinas)
}

// Tarefa
/*
    Criar model de Disciplina e listar todas cadastras no sistema
*/

listarDisciplinas()