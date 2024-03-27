"use strict";

const contentTypes = require('./content-types');
const utils = require('./utils');

//필요 모듈 임포트
const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    router = require('./router'),
    conternTypes = require('./content-types'),
    utils = require('./utils');

//GET라우트
router.get("/", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/inden.html", res);
});
router.get("/courses.html", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});
router.get("/", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("", res);
});
//POST라우트
router.post("/", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});
//에셋 라우트
router.get("/contact.html", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});
//CSS
router.get("/confetti_cuisine.css", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("public/css/confetti_cuisine.css", res);
});
router.get("/bootstrap.css", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("public/css/bootstrap.css", res);
});
//JS
router.get("/confetti_cuisine.js", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("public/js/confetti_cuisine.js", res);
});
//IMG
router.get("/people.jpg", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("public/img/people.jpg", res);
});
router.get("/product.jpg", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("public/img/product.jpg", res);
});
router.get("/grahp.jpg", (req,res) => {
    res.WriteHead(httpStatus.OK, contentTypes.html);
    utils.getFile("public/img/graph.png", res);
});


http.createServer(router.handle).listen(port);
console.log(`Server at:http://localhost:${port}`);
