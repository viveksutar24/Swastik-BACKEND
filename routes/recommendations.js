let express = require("express");
let bodyparser = require("body-parser");
let router = express.Router();
let Recommendation = require("../models/Recommendation");
let fs = require("fs");

router.post("/save", async (req, res) => {
    let body = req.body;
    let recommendation = new Recommendation();
    if (body.data.id != "") {
        recommendation = await Recommendation.findById(body.data.id);
    }
    recommendation.adminid = body.data.adminid;
    recommendation.cropid = body.data.cropid;
    recommendation.rdate = body.data.rdate;
    recommendation.dose = body.data.dose;
    recommendation.space = body.data.space;
    recommendation.space = body.data.space;
    recommendation.drip = body.data.drip;
    recommendation.sparewater = body.data.sparewater;


    recommendation.save().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, err => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    })
});

router.post("/list", async (req, res) => {
    let recommendation = await recommendation.find();
    res.end(JSON.stringify({ status: "success", data: recommendation }));
});


router.post("/get", async (req, res) => {
    let body = req.body;
    let recommendation = await recommendation.findById(body.data.id);
    res.end(JSON.stringify({ status: "success", data: recommendation }));

});

router.post("/delete", async (req, res) => {
    let body = req.body;
    await Recommendation.findByIdAndDelete(body.data.id);
    res.end(JSON.stringify({ status: "success" }));

})


module.exports = router;