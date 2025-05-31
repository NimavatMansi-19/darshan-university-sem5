const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.end("This  is home page")
    }
    else if(req.url=='/about'){
        res.end("This  is about page")
    }
    else if(req.url=='/contact'){
        res.end("This  is contact page")
    }
    else if(req.url=='/help'){
        res.end('This is help page')
    }
    else if(req.url=='/other'){
        res.end('This is other page')
    }
    else{
        res.end('The page not found')
    }
    
    })
    server.listen(3000,()=>{
        console.log('Server is listening at 3000')

})