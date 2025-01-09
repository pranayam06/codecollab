import { createServer } from "http"
import { Server } from "socket.io"
const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? false : ["http://127.0.0.1:5500"]
    }
})

io.on('connection', socket => {
    console.log(`User: ${socket.id} connected`)
    socket.on('message', data => {  
        console.log(data)
        
        io.emit('message', `${data}`)

    })
} ) 

httpServer.listen(3500, () => console.log("listening on port 3500"));