import patientsData from '../../data/patients.json';
import { patientType, NonSensitivePatient} from '../types';

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

export default {getData, getNonSensitiveData};
