import express from 'express';
import entryService from '../services/entryService';
import patientService from '../services/patientService';
import { Entry } from '../types';

const router = express.Router();

router.get('/:id/entries', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const id = req.params.id;
    const patient = patientService.getPatient(id);

    res.json(patient?.entries);
});

router.post('/:id/entries', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const id = req.params.id;
    const patient = patientService.getPatient(id);
    if(!patient){
        res.send("Patient not found");
        throw new Error('Patient not found'); 
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const entry: Entry = req.body;
    if(!validateEntry(entry)){
        res.send("Missing inputvalue");
        return false;
    }
    entry.id = idGenerator();
    
    switch(entry.type){
        case "Hospital":            
            entryService.addHospitalEntry(entry, id); 
            res.json(entry);           
            return entry;
        case "HealthCheck":
            entryService.addHealthCheckEntry(entry, id);
            res.json(entry);
            return entry;
        case "OccupationalHealthcare":
            entryService.addOccupationalHealthcareEntry(entry, id);
            res.json(entry);
            return entry;
        default:
            res.send("Error");
            return assertNever(entry);
    }
});

const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

const validateEntry = (entry: Entry):boolean => {
    switch(entry.type){
        case "Hospital":
            validateInputString(entry.date);
            validateInputString(entry.description);
            validateInputString(entry.specialist);            
            return true;
        case "HealthCheck":
            validateInputString(entry.date);
            validateInputString(entry.description);
            validateInputString(entry.specialist);         
            return true;       
        case "OccupationalHealthcare":
            validateInputString(entry.date);
            validateInputString(entry.description);
            validateInputString(entry.specialist);
            validateInputString(entry.employerName);
            return true;
        default:
            return assertNever(entry);
    }
};

const validateInputString = (input:unknown): string => {
    if(!input || typeof(input) !== 'string'){
        console.log(typeof(input));
        
        throw new Error(`Incorrect or missing input`);
    }
    return input;
};

const idGenerator = ():string => {
    return Math.random().toString(36).substr(2, 9);
};

export default router;