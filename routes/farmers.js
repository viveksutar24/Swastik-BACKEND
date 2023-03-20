let express = require("express");
let mongoose = require("mongoose");
let Farmer = require("../models/Farmer");


let router = express.Router();


router.post("/", (req, res) => {
    let body = req.body;
    // console.log(body);
    let object = new Farmer(body);
    object.save().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }).catch(err => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});



router.put("/:id", (req, res) => {
    let body = req.body;
    let id = req.params.id;
    Farmer.findByIdAndUpdate(id, body).then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }).catch(err => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


router.get("/", (req, res) => {
    Farmer.find().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }).catch(err => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    })
});


router.get("/:id", (req, res) => {
    let id = req.params.id;
    // console.log(id)
    Farmer.findById(req.params.id).then(result => {
        console.log(result);
        res.end(JSON.stringify({ status: "success", data: result }));
    }).catch(err => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    })
});


router.delete("/:id", (req, res) => {
    let id = req.params.id;
    Farmer.findByIdAndDelete(id).then(result => {
        console.log(result);
        res.end(JSON.stringify({ status: "success", data: result }));
    }).catch(err => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    })
});



module.exports = router;






