interface ReturnObject {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}
export declare const exerciseCalculator: (exercises: Array<string>, target: string) => ReturnObject | undefined;
export {};
