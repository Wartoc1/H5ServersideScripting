const {send} = require("../helpers");

module.exports = {
    GET: {
        handler: function(req, res){
            send(req, res, { says: "Duck", method: req.method});
        }
        
    },
    POST: {
        handler: function(req, res){
            send(req, res, { says: "Duck", method: req.method});
        }
    }
}