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

// Grass = require('./class.grass');
// GrassEater=require('.class.grasseater');
// Gishatich =require('.class.gishatich');
// Person=require('.class.person');

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("new_modules"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3020, function(){
    console.log("Example is running on port 3020")
}
    );
matrix = [];
matrix = [1, 1, 1];
io.on('connection', function (socket) {
    socket.emit("send matrix", matrix);
});

matrix = []
grassArr = []
grassEaterArr = []
gishatichArr = []
personArr = []


function generateMatrix(size, grassCount, grassEaterCount, gishatichCount, personCount) {
    var matrix = [];
    for (let y = 0; y < size; y++) {
        matrix[y] = []
        for (let x = 0; x < size; x++) {
            matrix[y].push(0)
        }
    }
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * (size - 1));
        let y = Math.floor(Math.random() * (size - 1));
        if (matrix[y][x] == 0) {
            matrix[y][x] == 1
        }
        else {
            i--
        }
    }
    
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.round(Math.random() * (size - 1))
        let y = Math.round(Math.random() * (size - 1))
        if (matrix[y][x] == 0) {
            matrix[y][x] == 2
        }
        else {
            i--
        }
    }
    for (let i = 0; i < gishatichCount; i++) {
        let x = Math.round(Math.random() * (size - 1))
        let y = Math.round(Math.random() * (size - 1))
        if (matrix[y][x] == 0) {
            matrix[y][x] == 3
        }
        else {
            i--
        }
    }
    for (let i = 0; i < personCount; i++) {
        let x = Math.round(Math.random() * (size - 1))
        let y = Math.round(Math.random() * (size - 1))
        if (matrix[y][x] == 0) {
            matrix[y][x] == 4
        }
        else {
            i--
        }
    }
    return matrix;
}

// let z;
// for (let y = 0; y < 50; y++) {
//     matrix[y] = []
//     for (let x = 0; x < 50; x++) {
//         z = Math.round(Math.random() * 0)
//         matrix[y].push(z);

//     }

// }
var matrix = generateMatrix(30, 20, 20, 20, 160, 5, 2);


console.log(matrix)

// function setup() {
//     createCanvas(matrix.length * side + 1, matrix.length * side + 1)
//     background("gray");
//let side = 10;
//     createCanvas(501, 501);
//     background('white');
//     new Grass(1, 0)
//     new Grass(6, 7)
//     new GrassEater(5, 5)
//     new GrassEater(7, 6)
//     new Gishatich(7, 8)
//     new Gishatich(12, 15)
//     new Person(2, 1)
//     new Person(3, 2)
//     new Person(4, 3)

//     frameRate(15)

// }
// function draw() {

//     fill('white')
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix.length; x++) {
//             if (matrix[y][x] == 0) {
//                 fill('white')
//             }
//             else if (matrix[y][x] == 1) {
//                 fill('green')
//             }
//             else if (matrix[y][x] == 2) {
//                 fill('yellow')
//             }
//             else if (matrix[y][x] == 3) {
//                 fill('red')
//             }
//             else if (matrix[y][x] == 4) {
//                 fill("black")
//             }
//             rect(x * 10, y * 10, 10, 10)

//         }
//     }
   

//     for (let i in grassArr) {
//         grassArr[i].mul()
//     }
//     for (let i in grassEaterArr) {
//         grassEaterArr[i].start()
//     }
//     for (let i in gishatichArr) {
//         gishatichArr[i].start()
//     }
//     for (let i in personArr) {
//         personArr[i].start()
//     }
// }
// function setup(){
//     createCanvas(500,500);
//     background("grey");
//     frameRate(3);
// }

 io.on('connection', function (socket) {
     socket.emit("send matrix",matrix)
    });
