const express = require('express')
const path = require('path')
const app = express()
const uuid = require('uuid').v4

const uploads = []

// Incializa ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Deixa a pasta "uploads" publica
app.use(express.static(path.join(__dirname, 'uploads')));

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const tiposPermitidos = ['image/jpeg', 'image/png']

        if (tiposPermitidos.includes(file.mimetype)) {
            cb(null, path.join(__dirname, 'uploads'))
        } else {
            cb('Só aceita imagem')
        }
    },
    filename: (req, file, cb) => {
        cb(null, `${uuid()}_${file.originalname}`)
    }
})

const upload = multer({
    storage: storage
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/galeria', (req, res) => {
    res.render('galeria', { images: uploads })
})

app.post('/upload', upload.single('arquivo'), (req, res) => {
    console.log(req.file)
    uploads.push(req.file.filename)
    res.send(204)
})

app.listen(3000)