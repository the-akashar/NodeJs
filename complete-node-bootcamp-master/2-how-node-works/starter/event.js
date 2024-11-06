const EventEmitter = require("events");
const http = require('http');

class Sales extends EventEmitter {
    constructor(){
        super();
    }
    
}

const myEmitter = new EventEmitter();

myEmitter.on("newSale",()=>{
    console.log("There was a new sale!")
})

myEmitter.on("newSale",()=>{
    console.log("Customer name is Jonas")
})

myEmitter.on("newSale",(stock)=>{
    console.log(`There was now ${stock} left in stock`)
})

myEmitter.emit("newSale",9);

//////////////////////////

const server = http.createServer();

server.on("request" , (res,req) => {
    console.log('request recives');
    console.log(req.url);
    res.end("Request Recived");
});

server.on("request",(res,req)=>{
    console.log('another request recives')
});

server.on('close',()=>{
    console.log('Server closed')
});


server.listen(8000 , "localhost" , ()=>{
    console.log("Waitong for the request")
});
