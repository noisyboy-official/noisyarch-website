var express = require("express");
var router = express.Router();

var metricaController =  require("../controllers/metricaController");

router.get("/listarMetricaCinnamon", function(req,res){
    metricaController.listarMetricaCinnamon(req,res);
});

router.get("/listarMetricaDeepin", function(req,res){
    metricaController.listarMetricaDeepin(req,res);
});

router.get("/listarMetricai3wm", function(req,res){
    metricaController.listarMetricai3wm(req,res);
});

router.get("/listarMetricaXFCE", function(req,res){
    metricaController.listarMetricaXFCE(req,res);
});


module.exports = router;