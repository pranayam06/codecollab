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
    let id = (socket.id).slice(0, 5)
    collaborators.push(id)   
    console.log(`User: ${socket.id} connected`)   
    console.log(id)

    socket.on("disconnect", (reason) => { 
        var index = collaborators.indexOf(id)
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