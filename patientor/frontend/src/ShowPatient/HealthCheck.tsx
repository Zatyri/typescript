import React from 'react';
import { HealthCheckEntry } from '../types';
import { Divider, Icon } from 'semantic-ui-react';
import { useStateValue } from '../state';


const HealthCheck: React.FC<{entry: HealthCheckEntry}> = ({entry}) => {
    const [{ diagnosis }] = useStateValue();

    const healthRating = () => {
        switch(entry.healthCheckRating){
            case 0:
                return "red";
            case 1:
                return "orange";
            case 2:
                return "yellow";
            case 3:
                return "black";
            default:
                return undefined;
        }
    };

    return (
        <>
            <p>{entry.date} <Icon name="doctor"/></p>
            <p>{entry.description}</p>
            {entry.diagnosisCodes?.map(diagnoseCode => (
                <li key={diagnoseCode}>{diagnoseCode} {diagnosis.find(diagnose => diagnose.code === diagnoseCode)?.name}</li>
            ))}
            <Icon name="heart" color={healthRating()} />                    
            <Divider />
        </>
    );
};

export default HealthCheck;