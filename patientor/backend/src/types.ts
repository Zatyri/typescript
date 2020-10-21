export interface Diagnose {
    code: string,
    name: string,
    latin?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export interface patientType {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: gender,
    occupation: string,
    entries: Entry[]
}

export type NonSensitivePatient = Omit<patientType, 'ssn' | 'entries'>;

export enum gender {
    male = 'male',
    female = 'female',
    other = 'other'
}