import express from 'express';
import {bmiCalculator} from './bmiCalculator';


const app = express();

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!')
});

app.get('/bmi', (req, res) => {
    try {        
        const height = req.query.height
        const weight = req.query.weight
    
        if(typeof(height) !== 'string' && typeof(weight) !== 'string') throw new Error('No valid parameters')

        const bmi = bmiCalculator([height, weight])
        console.log(bmi);
        
        res.send(bmi)
    } catch (error) {
        res.send(error.message).status(400)
    }

})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})