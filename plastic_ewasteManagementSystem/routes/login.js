var express = require("express");
var router = express.Router();
const connection = require('../database/db');

/* GET login page. get method */
router.get("/", function(req, res, next) {
    res.render("login");
});

/* GET login page. post method */
router.post("/", function(req, res, next) {
    var q = "select * from Customer where cid = ? and password = ?";
    var customer = req.body.cid;
    var psw = req.body.password;
    connection.query(q, [customer, psw],(err, result) => {
        if (err) {
            res.send("Invalid credentials");
        } else {
            res.render("customerhomepage", { data: result });
        }
    });
});

module.exports = router;