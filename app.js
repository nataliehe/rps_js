var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exports = module.exports = {};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/1-player', (req, res) => {
  res.sendFile(__dirname + '/views/registerOnePlayer.html');
});

app.get('/2-players', (req, res) => {
  res.sendFile(__dirname + '/views/registerTwoPlayers.html');
});

app.use(bodyParser.urlencoded({extended: false}));

app.post('/player1', function(req, res) {
  var player1 = req.body.player1;
  console.log(player1);
  res.redirect('/player1');
});

app.get('/player1', (req, res) => {
  var currentPlayer = player1;
  res.sendFile(__dirname + '/views/play.html');
});

var server = app.listen(3000, () => {
  console.log('Node is listening on port 3000');
});

exports.closeServer = () => {
  server.close();
};
