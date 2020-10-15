const calculateBmi = (height: number, weight: number):string => {

    const heightMeter = height/100

    const bmi = weight/(heightMeter*heightMeter)

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
    }
}

console.log(calculateBmi(180, 74))