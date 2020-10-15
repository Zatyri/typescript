"use strict";
var inputValidator = function (args) {
    if (args.length < 4)
        throw new Error('Too few arguments');
    if (args.length > 4)
        throw new Error('Too many arguments');
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };
    }
    else {
        throw new Error('Please provide numbers');
    }
};
var calculateBmi = function (height, weight) {
    var heightMeter = height / 100;
    var bmi = weight / (heightMeter * heightMeter);
    if (bmi <= 18.5) {
        return "Underweight, bmi: " + bmi;
    }
    else if (bmi > 18.5 && bmi <= 23) {
        return "Normal range, bmi: " + bmi;
    }
    else if (bmi > 23 && bmi <= 25) {
        return "Overweight - At Risk, bmi: " + bmi;
    }
    else if (bmi > 25 && bmi <= 30) {
        return "Overweight\u2014Moderately Obese, bmi: " + bmi;
    }
    else if (bmi > 30) {
        return "Overweight\u2014Severely Obese, bmi: " + bmi;
    }
    else {
        return "Error in calculation, bmi: " + bmi;
    }
    ;
};
var height = Number(process.argv[2]);
var weight = Number(process.argv[3]);
try {
    var _a = inputValidator(process.argv), height_1 = _a.height, weight_1 = _a.weight;
    console.log(calculateBmi(height_1, weight_1));
}
catch (error) {
    console.log("Error: " + error.message);
}
