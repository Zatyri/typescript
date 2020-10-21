import patientsData from '../../data/patients';
import { Patient, NonSensitivePatient, Gender} from '../types';

const patients: Array<Patient> = patientsData;


const getData = ():Array<Patient> => {
    return patients;
};

const getNonSensitiveData = ():NonSensitivePatient[] => {   
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const getPatient = (id:string): Patient | undefined => {    
    return patients.find(patient => patient.id === id);
};

const addData = (name:string, ssn: string, dateOfBirth: string, gender: Gender, occupation: string):NonSensitivePatient => {
    const newPatient:Patient = {
        id: idGenerator(),
        name: name,
        ssn: ssn,
        dateOfBirth: dateOfBirth,
        gender: gender,
        occupation: occupation,
        entries: []
    };
    const nonSensitivePatient: NonSensitivePatient = {
        id: idGenerator(),
        name: name,        
        dateOfBirth: dateOfBirth,
        gender: gender,
        occupation
    };

    patients.push(newPatient);

    return nonSensitivePatient;
};

const idGenerator = ():string => {
    return Math.random().toString(36).substr(2, 9);
};

export default {getData, getNonSensitiveData, getPatient, addData};
