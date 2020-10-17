interface ReturnObject {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const validateInput = (args: Array<string>, target:string):boolean => {    
    if(args.length === 0 || target === undefined) throw new Error('No arguments');
    args.concat(target);
    args.forEach(day => {
        if(isNaN(Number(day))){
            throw new Error('Arguments has to be numbers');
        }
    });

    return true;
};

const calculateExercises = (exercises:Array<number>, target: string):ReturnObject => {
    
    
    const totalDays = exercises.length;
    const trainingDays = exercises.filter(day => day > 0).length;    
    const trainingHours = exercises.reduce((total, next) => {
        return total + next;
    },0);
    const averageTrainingTime = trainingHours/totalDays;
    let rating = 0;
    let ratingExplanation = '';

    if(averageTrainingTime >= 1 && averageTrainingTime < 2){
        rating = 2;
        ratingExplanation = 'Good';
    } else if (averageTrainingTime < 1){
        rating = 1;
        ratingExplanation = 'Bad';
    } else if( averageTrainingTime >= 2){
        rating = 3;
        ratingExplanation  = 'Excellent';
    } 

    const returnValue = {
        periodLength: totalDays,
        trainingDays: trainingDays,
        success: (averageTrainingTime >= Number(target))? true:false,
        rating: rating,
        ratingDescription: ratingExplanation,
        target: Number(target),
        average: averageTrainingTime
    };

    return returnValue;
};

export const exerciseCalculator = (exercises:Array<string>, target:string):ReturnObject | undefined => {
    try {
        if(validateInput(exercises, target)){
            const exerciseNumber:Array<number> = exercises.map(day => Number(day));
            return calculateExercises(exerciseNumber, target);
        } 
        return;
    } catch(error){
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.log(`Error: ${error}`);
        return;
    }
};
