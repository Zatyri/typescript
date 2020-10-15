"use strict";
var validateInput = function (args) {
    if (args.length === 2)
        throw new Error('No arguments');
    args.shift();
    args.shift();
    args.forEach(function (day) {
        if (isNaN(Number(day))) {
            throw new Error('Arguments has to be numbers');
        }
    });
    return args.map(function (day) { return Number(day); });
};
var calculateExercises = function (exercises) {
    var targetValuePerDay = exercises[0];
    exercises.shift();
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
    ;
    var returnValue = {
        periodLength: totalDays,
        trainingDays: trainingDays,
        success: (averageTrainingTime >= targetValuePerDay) ? true : false,
        rating: rating,
        ratingDescription: ratingExplanation,
        target: targetValuePerDay,
        average: averageTrainingTime
    };
    return returnValue;
};
try {
    var input = validateInput(process.argv);
    console.log(calculateExercises(input));
}
catch (error) {
    console.log("Error: " + error.message);
}
