const httpStatus = require("http-status-codes"),
    contentTypes = require("./content-types"),
    utils = require("./utils");

const routes = {
    "GET": {},
    "POST": {}
};

    module.handle = (req, res) => {
        try{
            routes[req.method][req.url](req,res);
        }catch(e){
            res.WriteHead(httpStatus.OK, ContentTypes.httpStatus);
            utils.getFile("views/error.html", res);
        }
    };

    exports.get = (url, action) => {
        routes["GET"][url] = action;
    };

    exports.POST = (url, action) => {
        routes["POST"][url] = action;
    };