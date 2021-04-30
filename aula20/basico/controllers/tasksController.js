const tasks = [
    {
        nome: 'Limpar casa',
        status: 'TODO'
    },
    {
        nome: 'Lavar louça',
        status: 'DONE'
    }
]

module.exports.list = (req, res) => {
    res.render('task', { tasks })
}