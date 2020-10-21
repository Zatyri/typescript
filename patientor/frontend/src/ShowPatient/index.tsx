import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../constants';
import { useStateValue, updatePatient } from '../state';
import { Header, Icon } from "semantic-ui-react";



const ShowPatient = () => {
    const {id} = useParams<{id: string}>();

    const [{ patients }, dispatch] = useStateValue();

    React.useEffect(() => {
        const getPatient = async () => {
            try {   
                if(!patients[id].ssn){
                    const response = await axios.get(`${apiBaseUrl}/patients/${id}`);
                    dispatch(updatePatient(response.data))
                }   
            } catch (error) {
                console.log(error);            
            }
        };
        getPatient();
    },[id, patients, dispatch]);

    

    if(!patients[id]){
        return <div>Loading...</div>;
    }

    const genderIcon = () => {
        switch(patients[id].gender){
            case "male":
                return "man";
            case "female":
                return "woman";
            case "other":
                return "other gender horizontal";
        }
    };
    
    return (
        <>
            <Header>{patients[id].name} <Icon name={genderIcon()} /></Header>
            <p>ssn: {patients[id].ssn}</p>
            <p>occupation: {patients[id].occupation}</p>
            <h4>entries</h4>
            {patients[id].entries?.map(entry => (
                <div key={entry.id}>
                <p>{entry.date} {entry.description}</p>
                <ul>
                    {entry.diagnosisCodes?.map(diagnosis => (
                        <li key={diagnosis}>{diagnosis}</li>
                    ))}
                </ul>
                </div>
            ))}
        </>
    );
};

export default ShowPatient;
