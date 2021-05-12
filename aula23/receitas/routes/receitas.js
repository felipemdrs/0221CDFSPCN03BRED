const express = require('express');
const router = express.Router();

const array = [];

router.get('/', (req, res) => {
    res.render('lista', { 
        pagina: 'lista',
        receitas: array
    })
})

router.get('/nova', (req, res) => {
    res.render('criar', {
        pagina: 'criar'
    })
})

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const receitaSelecionada = array[id - 1];
    
    res.render('detalhe', { 
        pagina: 'detalhe',
        receita: receitaSelecionada
    });
});

router.post('/', (req, res) => {
    const receitaNova = {
        id: array.length + 1,
        ...req.body
    }

    array.push(receitaNova)
    res.redirect('/receitas')
})

router.get('/lista', (req, res) => {
    res.render('lista', {
        pagina: 'lista',
        receitas: array 
    })
})

module.exports = router;
