const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Pagina Inicial\n');
})

app.get('/sobre', (req, res) => {
  res.send('sobre\n');
})

app.get('/jogar', (req, res) => {
  res.send('jogar\n');
})

app.get('/ajuda', (req, res) => {
  res.send('ajuda\n');
})

app.listen(8080, () => {
  console.log('Listening on localhost:8080');
})
