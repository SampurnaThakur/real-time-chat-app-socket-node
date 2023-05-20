const fs = require("fs");
var http = require('http');

http.createServer(function(req, res) {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(
      "<body><form action='/msg' method='POST'><input type='text' name='msg'/><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/msg" && req.method === "POST") {
    const data = [];
    req.on("data", (chunks) => {
      data.push(chunks);
    });

    req.on("end", () => {
      const parseddata = Buffer.concat(data).toString(); //message=hello
      console.log(parseddata)
      const finaldata = parseddata.split("=")[1];
      console.log(finaldata)
if(finaldata%2==0)
{
   fs.writeFile("test.txt", "It was an even number", () => {
        console.log("File Written");
        res.end("Even number");
      });
}
else{
  fs.writeFile("test.txt", "It was an odd number", () => {
    console.log("File Written");
    res.end("Odd number");
  });
}
    });
  }
}).listen(3000);