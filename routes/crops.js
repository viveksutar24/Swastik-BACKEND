let express = require("express");
let bodyparser = require("body-parser");
let router = express.Router();
let Crop = require("../models/Crop");
let fs = require("fs");

router.post("/save", async (req, res) => {
    let body = req.body;
    let crop = new Crop();
    if (body.data.id != "") {
        result = await Crop.findById(body.data.id);
    }
    crop.name = body.data.name;

    crop.save().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, err => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    })
});

router.post("/list", async (req, res) => {
    let crop = await Crop.find();
    res.end(JSON.stringify({ status: "success", data: crop }));
});


router.post("/get", async (req, res) => {
    let body = req.body;
    let crop = await Crop.findById(body.data.id);
    res.end(JSON.stringify({ status: "success", data: crop }));

});

router.post("/delete", async (req, res) => {
    let body = req.body;
    await Crop.findByIdAndDelete(body.data.id);
    res.end(JSON.stringify({ status: "success" }));

});


module.exports = router;