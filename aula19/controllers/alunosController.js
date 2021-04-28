module.exports.criar = (req, res) => {
    res.send(201, 'Aluno criado')
}

module.exports.listar = (req, res) => {
    res.send('Lista de alunos')
}

module.exports.atualizar = (req, res) => {
    const { id } = req.params
    res.send(`Aluno ${id} atualizado`)
}

module.exports.deletar = (req, res) => {
    const { id } = req.params
    res.send(`Aluno ${id} deletado`)
}
