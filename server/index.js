import { createServer } from "http"
import { Server } from "socket.io"
const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? false : ["http://127.0.0.1:5500"]
    }
}) 
let collaborators = []

io.on('connection', socket => {   
    collaborators.push(socket.id)   
    console.log(`User: ${socket.id} connected`)  

    socket.on("disconnect", (reason) => { 
        var index = collaborators.indexOf(`${socket.id}`)
        collaborators.splice(index, 1) 
        io.emit("rerender collaborators", collaborators)
    })
    
    io.emit("rerender collaborators" , collaborators)

    

    


    socket.on('message', data => {  
        console.log(data)
        
        io.emit('message', `${data}`)

    })
} ) 

httpServer.listen(3500, () => console.log("listening on port 3500"));