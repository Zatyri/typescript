export interface Diagnose {
    code: string,
    name: string,
    latin?: string
}

export interface patientType {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: gender,
    occupation: string
}

export type NonSensitivePatient = Omit<patientType, 'ssn'>;

export type gender = 'male' | 'female' | 'unknown';