// var express = require("express");

// var app = express();

// app.use(express.static("new_modules"));

// app.get("/", function(req, res){

// res.redirect("index.html");

// });

// app.listen(3000, function(){

// console.log("Example is running on port 3000");

// });

// var express = require("express");
// var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);

// var messages = [];

// app.use(express.static("."));

// app.get('/', function (req, res) {
// res.redirect('index.html');
// });

// io.on('connection', function (socket) {

//     for(var i in messages) {
//      socket.emit("display message", messages[i]);
//     }

//     socket.on("send message", function (data) {
//     messages.push(data);
//     io.sockets.emit("display message", data);
//     });
//     });

// server.listen(3000);


var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("new_modules"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3005);
matrix = [];
matrix = [1, 1, 1]
io.on('connection', function (socket) {
    socket.emit("send matrix", matrix);
});

matrix = []
grassArr = []
grassEaterArr = []
gishatichArr = []
personArr = []

let side = 10
function generateMatrix(size, grassCount, grassEaterCount,gishatichCount,personCount) {
    var matrix = [];
    for (let i = 0; i < size; i++) {
        matrix.push([])
        for (let j = 0; j < size; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < gishatichCount; i++) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < personCount; i++) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }

    return matrix;
}

let z;
for (let y = 0; y < 50; y++) {
   matrix[y] = []
   for (let x = 0; x < 50; x++) {
      z = Math.round(Math.random() * 0)
      matrix[y].push(z);

   }


var matrix = generateMatrix(30, 20, 20, 20, 160, 5, 2)
io.on('connection', function (socket) {
    socket.emit("send matrix", matrix)
});
}
