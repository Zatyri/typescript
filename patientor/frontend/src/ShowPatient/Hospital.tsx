import React from 'react';
import { HospitalEntry } from '../types';
import { Divider, Icon } from 'semantic-ui-react';
import { useStateValue } from '../state';


const Hospital: React.FC<{entry: HospitalEntry}> = ({entry}) => {
    const [{ diagnosis }] = useStateValue();
    return (
        <>
            <p>{entry.date} <Icon name="hospital"/></p>
            <p>{entry.description}</p>
            {entry.diagnosisCodes?.map(diagnoseCode => (
                        <li key={diagnoseCode}>{diagnoseCode} {diagnosis.find(diagnose => diagnose.code === diagnoseCode)?.name}</li>
                    ))}     
            <Divider />
        </>
    );
};

export default Hospital;
