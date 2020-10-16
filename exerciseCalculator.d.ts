interface ReturnObject {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}
declare const validateInput: (args: Array<String>) => Array<number>;
declare const calculateExercises: (exercises: Array<number>) => ReturnObject;
