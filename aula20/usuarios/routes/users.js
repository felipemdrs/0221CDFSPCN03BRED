const express = require('express');
const router = express.Router();

const usuarios = require('../models/usuarios.json')

router.get('', function(req, res, next) {
  const buscaNome = req.query.nome

  let usuarioEncontrado = usuarios

  if (buscaNome) {
    usuarioEncontrado = 
      usuarios.filter(usuario => usuario.nome.indexOf(buscaNome) !== -1)
  }

  res.render('usuarios/lista', { 
    usuarios: usuarioEncontrado,
    mensagem: 'Oi, tudo bem?'
  });
});

router.get('/:id', function(req, res, next) {
  const id =  parseInt(req.params.id)

  const usuarioEncontrado = 
    usuarios.filter(usuario => usuario.id === id)

  res.render('usuarios/detalhe', {
    usuario: usuarioEncontrado[0]
  });
});

module.exports = router;
