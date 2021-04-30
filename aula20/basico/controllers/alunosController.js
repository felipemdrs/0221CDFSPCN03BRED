module.exports.criar = (req, res) => {
    res.send(201, 'Aluno criado')
}

module.exports.listar = (req, res) => {
    res.render('listaAluno', {
        alunos: [
            {
                nome: 'Felipe'
            },
            {
                nome: 'Anderson'
            }
        ]
    })
}

module.exports.atualizar = (req, res) => {
    const { id } = req.params
    res.send(`Aluno ${id} atualizado`)
}

module.exports.deletar = (req, res) => {
    const { id } = req.params
    res.send(`Aluno ${id} deletado`)
}
