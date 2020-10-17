/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import {bmiCalculator} from './bmiCalculator';
import {exerciseCalculator} from './exerciseCalculator';


const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    try {        
        const height = req.query.height;
        const weight = req.query.weight;
    
        if(typeof(height) !== 'string' && typeof(weight) !== 'string') throw new Error('No valid parameters');

        const bmi = bmiCalculator([height, weight]);
        console.log(bmi);
        
        res.send(bmi);
    } catch (error) {
        res.send(error).status(400);
    }
});

app.post('/exercises', (req,res) => { 

    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const body = req.body;        
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const dailyExercises = body.daily_exercises;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const target = body.target;
        
        if(body === undefined || dailyExercises === null || target === null){
            throw new Error('parameters missing');
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const result = exerciseCalculator(dailyExercises, target);

        res.json(result);

    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.log(`Error: ${error}`);
        res.json(error);
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});