var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/view/index.html');
});

app.get('/jquery.js', function(req, res){
	res.sendFile(__dirname+'/view/jquery.js')
})

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data.user, data.date);
    socket.emit('pesan', {'pesan':'paket terkirim :)', 'date':new Date()});
  })
});