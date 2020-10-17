"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
var express_1 = __importDefault(require("express"));
var bmiCalculator_1 = require("./bmiCalculator");
var exerciseCalculator_1 = require("./exerciseCalculator");
var app = express_1["default"]();
app.use(express_1["default"].json());
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
        res.send(error).status(400);
    }
});
app.post('/exercises', function (req, res) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        var body = req.body;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var dailyExercises = body.daily_exercises;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var target = body.target;
        if (body === undefined || dailyExercises === null || target === null) {
            throw new Error('parameters missing');
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        var result = exerciseCalculator_1.exerciseCalculator(dailyExercises, target);
        res.json(result);
    }
    catch (error) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.log("Error: " + error);
        res.json(error);
    }
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});
