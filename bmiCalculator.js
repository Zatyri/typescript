"use strict";
exports.__esModule = true;
exports.bmiCalculator = void 0;
var inputValidator = function (args) {
    if (typeof (args[0]) !== 'string' && typeof (args[1]) !== 'string')
        throw new Error('Invalid input');
    if (args.length < 2)
        throw new Error('Too few arguments');
    if (args.length > 2)
        throw new Error('Too many arguments');
    if (!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
        return {
            height: Number(args[0]),
            weight: Number(args[1])
        };
    }
    else {
        throw new Error('Please provide numbers');
    }
};
var calculateBmi = function (height, weight) {
    var heightMeter = height / 100;
    var bmi = weight / (heightMeter * heightMeter);
    var bmitext;
    if (bmi <= 18.5) {
        bmitext = "Underweight, bmi: " + bmi;
    }
    else if (bmi > 18.5 && bmi <= 23) {
        bmitext = "Normal range, bmi: " + bmi;
    }
    else if (bmi > 23 && bmi <= 25) {
        bmitext = "Overweight - At Risk, bmi: " + bmi;
    }
    else if (bmi > 25 && bmi <= 30) {
        bmitext = "Overweight\u2014Moderately Obese, bmi: " + bmi;
    }
    else if (bmi > 30) {
        bmitext = "Overweight\u2014Severely Obese, bmi: " + bmi;
    }
    else {
        bmitext = "Error in calculation, bmi: " + bmi;
    }
    ;
    return {
        weight: weight,
        height: height,
        bmi: bmitext
    };
};
/*
const height: number = Number(process.argv[2]);
const weight: number = Number(process.argv[3]);
*/
exports.bmiCalculator = function (input) {
    try {
        var _a = inputValidator(input), height = _a.height, weight = _a.weight;
        return calculateBmi(height, weight);
    }
    catch (error) {
        console.log("Error: " + error.message);
        return;
    }
};
