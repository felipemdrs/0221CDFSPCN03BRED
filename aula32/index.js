const models = require('./models')

async function teste() {
    const pessoa = await models.Pessoa.create({
        nome: 'Felipe',
        cpf: '000114'
    })

    await models.Dependente.create({
        nome: 'Dependente 1',
        idPessoas: pessoa.id
    })
}

async function buscaPessoaPorId(id) {
    const pessoa = await models.Pessoa.findOne({
        where: { id },
        include: [
            {
                model: models.Dependente,
                as: 'dependentes'
            }
        ]
    })

    console.log(pessoa.toJSON())
}

async function buscaDependente(id) {
    const dependente = await models.Dependente.findOne(
        { 
            where: {id},
            include: [
                {
                    model: models.Pessoa,
                    as: 'titular'
                }
            ]
        }
    )

    if (!dependente) {
        console.log('Dependente not found')
    } else {
        console.log(dependente.toJSON())
    }
}

buscaDependente(1)