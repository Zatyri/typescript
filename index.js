"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var bmiCalculator_1 = require("./bmiCalculator");
var app = express_1["default"]();
app.get('/hello', function (_req, res) {
    res.send('Hello Full Stack!');
});
app.get('/bmi', function (req, res) {
    try {
        var height = req.query.height;
        var weight = req.query.weight;
        if (typeof (height) !== 'string' && typeof (weight) !== 'string')
            throw new Error('No valid parameters');
        var bmi = bmiCalculator_1.bmiCalculator([height, weight]);
        console.log(bmi);
        res.send(bmi);
    }
    catch (error) {
        res.send(error.message).status(400);
    }
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});
