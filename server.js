const http = require("http");
const controller = require("./controller");

http.createServer(controller).listen(3003, function(){
    console.log("Server started, gå til http://localhost");
});