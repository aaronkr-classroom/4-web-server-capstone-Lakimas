"using strict";

//Listing 7.5 (p.123)
const fs = require('fs'),
    httpStatus = require('http-status-codes'),
    conternTypes = require('./content-types');

module.exports={
    getFile: (file,res) => {
        fs.readFile(`./{$file}`, (error, data) =>{
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR,
                    contentTypes.html);
                res.end("Error serving content!")
            }
            res.end(data);
        });
    }
};