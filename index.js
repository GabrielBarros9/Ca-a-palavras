const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function(req, res, next) => {
  res.sendFile(__dirname + "/index.html");
})

app.get('/jogar', function(req, res, next) => {
  res.sendFile(__dirname + "/jogar.html");
})

app.get('/sobre', function(req, res, next) => {
  res.sendFile(__dirname + "/sobrenovo.html");
})

app.get('/ajuda', function(req, res, next) => {
  res.sendFile(__dirname + "/ajuda.html");
})

app.listen(8080, () => {
  console.log('Listening on localhost:8080');
})
