const calculateExercises = (exercises:Array<number>):Object => {
    const totalDays = exercises.length;
    const trainingDays = exercises.filter(day => day > 0).length;
    const targetValuePerDay = 1.5;
    const trainingHours = exercises.reduce((total, next) => {
        return total + next
    },0);
    const averageTrainingTime = trainingHours/totalDays;
    let rating: number;
    let ratingExplanation: string;

    if(averageTrainingTime >= 1 && averageTrainingTime < 2){
        rating = 2
        ratingExplanation = 'Good'
    } else if (averageTrainingTime < 1){
        rating = 1
        ratingExplanation = 'Bad'
    } else if( averageTrainingTime >= 2){
        rating = 3
        ratingExplanation  = 'Excellent'
    };

    const returnValue = {
        periodLength: totalDays,
        trainingDays: trainingDays,
        success: (averageTrainingTime >= targetValuePerDay)? true:false,
        rating: rating,
        ratingDescription: ratingExplanation,
        target: targetValuePerDay,
        average: averageTrainingTime
    };

    return returnValue;
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));
