import express from 'express';
import patietnService from '../services/patientService';
import {gender} from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patietnService.getNonSensitiveData());
});

router.post('/', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {name, ssn, dateOfBirth, gender, occupation} = req.body;
    validateInputString(name);
    validateInputString(ssn);
    validateInputString(dateOfBirth);
    validateInputString(occupation);
    validateGender(gender);
    const newPatient = patietnService.addData(name, ssn, dateOfBirth, gender, occupation);
    
    res.json(newPatient);
});

const validateInputString = (input:unknown): string => {
    if(!input || typeof(input) !== 'string'){
        throw new Error(`Incorrect or missing input`);
    }
    return input;
};

const validateGender = (input:unknown): gender => {
    if(!input || typeof(input) !== 'string'){
        throw new Error('Incorrect or missing input');
    }
    if(!['male', 'female', 'other'].includes(input)){
        throw new Error('Incorrect or missing input');
    }
    return input as gender;
};

export default router;
