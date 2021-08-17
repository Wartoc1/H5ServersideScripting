const helpers = require("./helpers")
const logger = require("./logger");
module.exports = function(req, res){ // 2 argument

    logger(req, res);
    const url = req.url;
    const endpoint = new URL(req.url, "http://localhost:3003").pathname;

    const regEx = /^\/((css|img|js)\/)?[\w-]+\.(html|css|png|jpe?g|js|gif|tiff|svg|bmp)$/i; // i = ignore lower or upper case
    let result = endpoint.match(regEx);

    if(result) {
        //helpers.sendFile(req, res, "./static/" + result[0]);
        helpers.streamFile(req, res, "./static/" + result[0]);
        return;
    }

    console.log(result);

    // if(endpoint === "/index.html"){
    //     helpers.sendFile(req, res, "./static/index.html");
    //     return;
    // }

    // helpers.send(req, res, {message: "Ressource '" + endpoint + "' not avaliable"}, 404);
    helpers.send(req, res, {message: `Ressource '${endpoint}' not avaliable`}, 404);
    

    // helpers.send(req, res, {besked: "her kommer beskeden"});
    // res.statusCode = 200;
    // res.setHeader("Content-type", "text/plain");
    // res.end("Hello World...test");
}