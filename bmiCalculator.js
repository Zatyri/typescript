var calculateBmi = function (height, weight) {
    var bmi = weight / height ^ 2;
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
};
console.log(calculateBmi(180, 74));
