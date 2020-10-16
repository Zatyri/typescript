"use strict";
exports.__esModule = true;
exports.exerciseCalculator = void 0;
var validateInput = function (args, target) {
    if (args.length === 0 || target === undefined)
        throw new Error('No arguments');
    args.concat(target);
    args.forEach(function (day) {
        if (isNaN(Number(day))) {
            throw new Error('Arguments has to be numbers');
        }
    });
    return true;
};
var calculateExercises = function (exercises, target) {
    var totalDays = exercises.length;
    var trainingDays = exercises.filter(function (day) { return day > 0; }).length;
    var trainingHours = exercises.reduce(function (total, next) {
        return total + next;
    }, 0);
    var averageTrainingTime = trainingHours / totalDays;
    var rating = 0;
    var ratingExplanation = '';
    if (averageTrainingTime >= 1 && averageTrainingTime < 2) {
        rating = 2;
        ratingExplanation = 'Good';
    }
    else if (averageTrainingTime < 1) {
        rating = 1;
        ratingExplanation = 'Bad';
    }
    else if (averageTrainingTime >= 2) {
        rating = 3;
        ratingExplanation = 'Excellent';
    }
    var returnValue = {
        periodLength: totalDays,
        trainingDays: trainingDays,
        success: (averageTrainingTime >= Number(target)) ? true : false,
        rating: rating,
        ratingDescription: ratingExplanation,
        target: Number(target),
        average: averageTrainingTime
    };
    return returnValue;
};
exports.exerciseCalculator = function (exercises, target) {
    try {
        if (validateInput(exercises, target)) {
            var exerciseNumber = exercises.map(function (day) { return Number(day); });
            return calculateExercises(exerciseNumber, target);
        }
        return;
    }
    catch (error) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.log("Error: " + error);
        return;
    }
};
