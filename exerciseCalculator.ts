interface ReturnObject {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const validateInput = (args: Array<String>):Array<number> => {    
    if(args.length === 2) throw new Error('No arguments')
    args.shift();
    args.shift();
    args.forEach(day => {
        if(isNaN(Number(day))){
            throw new Error('Arguments has to be numbers')
        }
    });

    return args.map(day => Number(day))
}

const calculateExercises = (exercises:Array<number>):ReturnObject => {
    const targetValuePerDay = exercises[0];    
    exercises.shift();
    
    const totalDays = exercises.length;
    const trainingDays = exercises.filter(day => day > 0).length;    
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

try {
    const input = validateInput(process.argv);
    console.log(calculateExercises(input));
} catch(error){
    console.log(`Error: ${error.message}`);
    
}
