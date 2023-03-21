 const http = require("http");
const port = 8081;

http.createServer((req,res) =>{
   res.writeHead(200,{"content-Type": "text/html"});
   res.write("<h2>Hey Server started:):)</h2>");
   res.end();
})
.listen(port, ()=>{
    console.log(`nodejs server started running  on the ${port}`);

});
 
