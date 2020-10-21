import React from 'react';
import { Entry } from '../types';
import HealthCheck from './HealthCheck';
import Hospital from './Hospital';
import OccupationalHealthcare from './OccupationalHealtcare';

const EntryDetails: React.FC<{entry: Entry}> = ({entry}) => {

    const assertNever = (value: never): never => {
        throw new Error(
            `Unhandled enrty: ${JSON.stringify(value)}`
        );
    };
    
    
    switch(entry.type) {
        case "Hospital":
            return <Hospital entry={entry} />;
        case "HealthCheck":
            return <HealthCheck entry={entry} />;
        case "OccupationalHealthcare":
            return <OccupationalHealthcare entry={entry} />;
        default:
            return assertNever(entry);
    }    
};

export default EntryDetails;
