import patientsData from '../../data/patients';
import { HealthCheckEntry, HospitalEntry, OccupationalHealthcareEntry, Patient} from "../types";

const patients: Array<Patient> = patientsData;

const addHospitalEntry = (entry: HospitalEntry, id: string):HospitalEntry => {
    patients.find(subject => subject.id === id)?.entries.push(entry);
    return entry;
};

const addHealthCheckEntry = (entry: HealthCheckEntry, id: string):HealthCheckEntry => {
    patients.find(subject => subject.id === id)?.entries.push(entry);
    return entry;
};

const addOccupationalHealthcareEntry = (entry: OccupationalHealthcareEntry, id: string):OccupationalHealthcareEntry => {
    patients.find(subject => subject.id === id)?.entries.push(entry);
    return entry;
};

export default {addHospitalEntry, addHealthCheckEntry, addOccupationalHealthcareEntry};