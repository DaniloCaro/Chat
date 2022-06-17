const express = require('express');
const app = express();

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io');
const io = new Server(server)

app.use(express.static(__dirname + "/Cliente"));

io.on('connection', (socket) => {
    // socket.on('chat', (msg) => {
    //     console.log("Mensaje= " + msg)
    // })

    socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})

app.get('/', (req, res) => {
    // Para verificar antes de la conexion al html
    // res.send('Hello World!')
    res.sendFile(`${__dirname}/Cliente/index.html`)
})

const PORT = process.env.PORT || 3000;
server.listen(3000), () => {
    console.log('Server is running on port 3000')
}