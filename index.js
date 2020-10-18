const express = require('express')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
  res.send('Olá, Estou rodando no Docker! :P  ')
})

app.get('/test', (req, res) => {
  res.send('Testando 1, 2, 3..')
})
app.listen(PORT, HOST)