const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.setHeader("Contact-type","text-html");
    res.write("<a style='margin-left:50px;margin-right:50px;border: 1px solid black;background-color:lightblue;color:grey' href='about.html'>about</a>");
    res.write("<a style='margin-left:50px;margin-right:50px;border: 1px solid black;background-color:lightblue;color:grey' href='home.html'>home</a>");
    
    if(req.url=="/about.html"){
        const data=fs.readFileSync("about.html",'utf-8');
        res.end(data.toString());
    }
    else if(req.url=="/home.html"){
       const data=fs.readFileSync("home.html",'utf-8');
        res.end(data.toString());
    }
    
    
});

server.listen(3000,()=>{
    console.log("server started at 3000");
});