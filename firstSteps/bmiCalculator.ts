interface InputValues {
    height: number;
    weight: number;
}

interface returnValue {
    height: number;
    weight: number;
    bmi: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const inputValidator = (args: Array<any>):InputValues => {
    if(typeof(args[0]) !== 'string' && typeof(args[1]) !== 'string') throw new Error('Invalid input');
    if(args.length < 2) throw new Error('Too few arguments');
    if(args.length > 2) throw new Error('Too many arguments');

    if (!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
        return {
          height: Number(args[0]),
          weight: Number(args[1])
        };
      } else {
        throw new Error('Please provide numbers');
      }
};

const calculateBmi = (height: number, weight: number):returnValue => {

    const heightMeter = height/100;

    const bmi = weight/(heightMeter*heightMeter);
    let bmitext: string;  

    if(bmi <= 18.5){
        bmitext = `Underweight, bmi: ${bmi}`;
    } else if( bmi > 18.5 && bmi <= 23){        
        bmitext = `Normal range, bmi: ${bmi}`;
    } else if ( bmi > 23 && bmi <= 25){
        bmitext = `Overweight - At Risk, bmi: ${bmi}`;
    } else if ( bmi > 25 && bmi <= 30 ){
        bmitext = `Overweight—Moderately Obese, bmi: ${bmi}`;
    } else if ( bmi > 30){
        bmitext = `Overweight—Severely Obese, bmi: ${bmi}`;
    } else {
        bmitext = `Error in calculation, bmi: ${bmi}`;
    }

    return {
        weight: weight,
        height: height,
        bmi: bmitext
    };
};
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bmiCalculator = (input:Array<any>):returnValue | undefined => {  
    try {        
        const {height, weight} = inputValidator(input);
        return calculateBmi(height,weight);
    } catch (error){          
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.log(`Error: ${error}`);
        return;
    }
};





