const http = require('http')

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.end("Hello world")
})
server.listen(3000,()=>{
    console.log('Sever is successfully running')
})