import React from 'react';
import { OccupationalHealthcareEntry } from '../types';
import { Divider, Icon } from 'semantic-ui-react';
import { useStateValue } from '../state';


const OccupationalHealthcare: React.FC<{entry: OccupationalHealthcareEntry}> = ({entry}) => {
    const [{ diagnosis }] = useStateValue();
    return (
        <>
            <p>{entry.date} <Icon name="heartbeat"/></p>
            <p>{entry.description}</p>  
            {entry.diagnosisCodes?.map(diagnoseCode => (
                        <li key={diagnoseCode}>{diagnoseCode} {diagnosis.find(diagnose => diagnose.code === diagnoseCode)?.name}</li>
                    ))}
                        
            <Divider />
        </>
    );
};

export default OccupationalHealthcare;