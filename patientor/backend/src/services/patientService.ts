import patientsData from '../../data/patients.json';
import { patientType, NonSensitivePatient, gender} from '../types';

const patients: Array<patientType> = patientsData as Array<patientType>;


const getData = ():Array<patientType> => {
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

const getPatient = (id:string): patientType |undefined => {
    return patients.find(patient => patient.id === id);
};

const addData = (name:string, ssn: string, dateOfBirth: string, gender: gender, occupation: string):NonSensitivePatient => {
    const newPatient:patientType = {
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
