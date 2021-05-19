const express = require('express')
const path = require('path')
const app = express()

// Incializa ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file)
        if (file.mimetype !== 'application/pdf') {
            cb('Só aceita pdf')
        } else {
            cb(null, path.join(__dirname, 'uploads'))
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage
})

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/upload', upload.single('arquivo'), (req, res) => {
    console.log(req.file)
    res.send(204)
})

app.post('/multiupload', upload.array('arquivos', 2), (req, res) => {
    console.log(req.file)
    res.send(204)
})

app.listen(3000)