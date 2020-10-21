import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../constants';
import { useStateValue } from '../state';
import { Header, Icon } from "semantic-ui-react";



const ShowPatient = () => {
    const {id} = useParams<{id: string}>();

    const [{ patients }, dispatch] = useStateValue();

    React.useEffect(() => {
        const getPatient = async () => {
            try {   
                if(!patients[id].ssn){
                    const response = await axios.get(`${apiBaseUrl}/patients/${id}`);
                    dispatch({type: "UPDATE_PATIENT", payload: response.data});
                }   
            } catch (error) {
                console.log(error);            
            }
        };
        getPatient();
    },[id, patients]);

    

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
        </>
    );
};

export default ShowPatient;