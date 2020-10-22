import patientsData from '../../data/patients';
import { HealthCheckEntry, HospitalEntry, OccupationalHealthcareEntry, Patient} from "../types";

const patients: Array<Patient> = patientsData;

const addHospitalEntry = (entry: HospitalEntry, id: string):Patient=> {
    patients.find(subject => subject.id === id)?.entries.push(entry);
    const patient = patients.find(subject => subject.id === id);
    if(!patient){
       throw new Error('No patient found');
    }
    return patient;
};

const addHealthCheckEntry = (entry: HealthCheckEntry, id: string):Patient => {
    patients.find(subject => subject.id === id)?.entries.push(entry);
    const patient = patients.find(subject => subject.id === id);
    if(!patient){
       throw new Error('No patient found');
    }
    return patient;
};

const addOccupationalHealthcareEntry = (entry: OccupationalHealthcareEntry, id: string):Patient => {
    patients.find(subject => subject.id === id)?.entries.push(entry);
    const patient = patients.find(subject => subject.id === id);
    if(!patient){
       throw new Error('No patient found');
    }
    return patient;
};

export default {addHospitalEntry, addHealthCheckEntry, addOccupationalHealthcareEntry};