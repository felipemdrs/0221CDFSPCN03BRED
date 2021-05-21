var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const bancoFake = require('./bancoFake')

router.get('/cadastro', (req, res) => {
  res.render('cadastro')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/cadastrar', async (req, res) => {
  const usuario = req.body

  if (bancoFake.buscarUsuario(usuario.email)) {
    res.render('cadastro', {
      mensagem: 'Usuario já existe'
    })
  } else {
    const hash = await encriptarSenha(usuario.senha)

    bancoFake.cadastar({
      nome: usuario.nome,
      email: usuario.email,
      hash
    })

    res.redirect('/users/login')
  }
})

router.post('/login', async (req, res) => {
  const login = req.body
  const usuario = bancoFake.buscarUsuario(login.email)

  if (!usuario) {
    res.send(404)
  } else {
    if (await validarSenha(login.senha, usuario.hash)) {
      req.session.usuario = usuario
      res.redirect('/users/home')
    } else {
      res.send(400)
    }
  }
})

router.get('/home', (req, res) => {
  if (req.session.usuario) {
    res.render('home', {
      usuario: req.session.usuario
    })
  } else {
    res.send(403)
  }
})

router.post('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/users/login')
})

async function encriptarSenha(senha) {
  const salt = await bcrypt.genSalt(5)
  return await bcrypt.hash(senha, salt)
}

async function validarSenha(senha, hash) {
  return await bcrypt.compare(senha, hash)
}

module.exports = router;
