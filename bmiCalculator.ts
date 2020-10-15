interface InputValues {
    height: number;
    weight: number;
}

const inputValidator = (args: Array<String>):InputValues => {
    if(args.length < 4) throw new Error('Too few arguments')
    if(args.length > 4) throw new Error('Too many arguments')

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
          height: Number(args[2]),
          weight: Number(args[3])
        }
      } else {
        throw new Error('Please provide numbers');
      }
}

const calculateBmi = (height: number, weight: number):string => {

    const heightMeter = height/100;

    const bmi = weight/(heightMeter*heightMeter);

    if(bmi <= 18.5){
        return `Underweight, bmi: ${bmi}`
    } else if( bmi > 18.5 && bmi <= 23){
        return `Normal range, bmi: ${bmi}`
    } else if ( bmi > 23 && bmi <= 25){
        return `Overweight - At Risk, bmi: ${bmi}`
    } else if ( bmi > 25 && bmi <= 30 ){
        return `Overweight—Moderately Obese, bmi: ${bmi}`
    } else if ( bmi > 30){
        return `Overweight—Severely Obese, bmi: ${bmi}`
    } else {
        return `Error in calculation, bmi: ${bmi}`
    };
}

const height: number = Number(process.argv[2]);
const weight: number = Number(process.argv[3]);

try {
    const {height, weight} = inputValidator(process.argv);
    console.log(calculateBmi(height,weight));
} catch (error){
    console.log(`Error: ${error.message}`);
    
}




