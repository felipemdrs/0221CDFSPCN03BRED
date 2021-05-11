var express = require('express');
var router = express.Router();
const fs = require('fs')

router.get('/novo', function(req, res, next) {
  res.render('novo')
});

router.post('/novo', function(req, res, next) {
  const dadosDoFormulario = req.body
  salvarObjeto(dadosDoFormulario)
  res.redirect('/')
})

function salvarObjeto(objeto) {
  const petsSalvos = require('../arquivo.json')
  petsSalvos.push(objeto)
  const str = JSON.stringify(petsSalvos)
  fs.writeFileSync('arquivo.json', str)
}

module.exports = router;
