//os module
const os = require("os");
let freeMemo = os.freemem();
console.log(freeMemo);

let total = os.totalmem();
console.log(total);

let usedMemo = (total - freeMemo) / (1024 * 1024 * 1024);
console.log("Used Memory in GB: " + usedMemo);

console.log(os.platform());
console.log(os.arch());

// fs module
const url  = require('url')
const {readdir, mkdir, readFile, writeFile} = require('fs');
readdir("../nodeModulesProject/CommonJS", (err, files)=>{
    if(err)console.log("error", err);
    else console.log(files);
})

mkdir("./Kebe/Abe/Almaz", {recursive: true},(err, path) =>{
    if (err) console.log("error", err);
    else console.log(path);
})

writeFile("message.txt", "Hello Class", (err)=>{
    if (err) throw err;
    console.log("The file has been saved!");
})

readFile("message.txt", "utf8",(err, data)=>{
    if(err)throw err;
    console.log(data);
})

// events module
const events = require('events');
const eventEmitter = new events.EventEmitter();

const myEventHandler = function(){
    console.log("Hi Abe!");
};
eventEmitter.on("Abe", myEventHandler);

eventEmitter.emit("Abe");

//http module

const http = require('http');
// console.log(http);
function requestHandler(req, res){
    /**** logic */
}
http.createServer(requestHandler);
// or the common way

const server =  http.createServer(function(req, res){
    /****logic */
    // say
    console.log("Request Received!");
    res.end("Hello There");
});
server.listen(7897, function(){
    console.log("It is listening!");
    const parsedURl = url.parse(req.url, true);
    // console.log(parsedURl);

    let filePath = parsedURl.path;
    console.log(filePath);
}); //7897 is port

/**************************bruk */

// const mimeTypes = require('mime-types').lookup // install mime-types in the project folder first 'npm i mime-types'
const server2 = http.createServer((req, res) =>{
    console.log("requested path >>>", req.url);
    if(req.url ==="/"){
        res.write("<h1> This is home page.</h1>");
        res.end();
    }else if(req.url === "/about"){
        res.write("<h1> This is about page.</h1>");
        res.end();
    }else{
        res.write("<h1> Page Not Found.</h1>");
        res.end();
    }
});

const PORT = 5001;
server2.listen(PORT, () =>{
    console.log(`Server is runing on PORT: http://localhost:${PORT}`);
});

server.on("error", () => {
    console.log("Error Occurred");
});