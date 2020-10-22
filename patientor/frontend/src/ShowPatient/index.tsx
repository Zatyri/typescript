import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../constants';
import { useStateValue, updatePatient, addEntry } from '../state';
import { Header, Icon, Button } from "semantic-ui-react";
import EntryDetails from './EntryDetails';
import {AddHospitalEntryModal, AddHealthCheckEntryModal, AddOccupationalEntryModal} from '../AddEntryModal';
import { HospitalEntryFormValues } from '../AddEntryModal/AddHospitalEntryForm';
import { Patient } from '../types';
import { HealthCHeckEntryFormValues } from '../AddEntryModal/AddHealthCheckEntryForm';
import { OccupationalEntryFormValues } from '../AddEntryModal/AddOccupationalEntryForm';



const ShowPatient: React.FC = () => {
    const {id} = useParams<{id: string}>();

    const [{ patients }, dispatch] = useStateValue();
    const [hospitalModalOpen, setHospitalModalOpen] = React.useState<boolean>(false);
    const [healthCheckModalOpen, setHealthCheckModalOpen] = React.useState<boolean>(false);
    const [occupationalModalOpen, setOccupationalModalOpen] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | undefined>();
   

    React.useEffect(() => {
        const getPatient = async () => {
            try {   
                if(!patients[id].ssn){
                    const response = await axios.get(`${apiBaseUrl}/patients/${id}`);
                    dispatch(updatePatient(response.data));
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

  const openHospitalModal = (): void => setHospitalModalOpen(true);
  const openHealthCheckModal = (): void => setHealthCheckModalOpen(true);
  const openOccupationalModal = (): void => setOccupationalModalOpen(true);

  const closeModal = (): void => {      
    setHospitalModalOpen(false);
    setHealthCheckModalOpen(false);
    setOccupationalModalOpen(false);
    setError(undefined);
  };

  const submitNewHospitalEntry = async (values: HospitalEntryFormValues) => {     
    try {        
      const {data: newEntry} = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${patients[id].id}/entries`,
        values
      );       
      dispatch(addEntry(newEntry));
      closeModal();
      
    } catch (e) {
      console.error(e.response.data);
      setError(e.response.data.error);
    }
  };

  const submitNewHealthCheckEntry = async (values: HealthCHeckEntryFormValues) => {     
    try {        
      const {data: newEntry} = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${patients[id].id}/entries`,
        values
      );       
      dispatch(addEntry(newEntry));
      closeModal();
      
    } catch (e) {
      console.error(e.response.data);
      setError(e.response.data.error);
    }
  };
  const submitOccupationalEntry = async (values: OccupationalEntryFormValues) => {     
    try {        
      const {data: newEntry} = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${patients[id].id}/entries`,
        values
      );       
      dispatch(addEntry(newEntry));
      closeModal();
      
    } catch (e) {
      console.error(e.response.data);
      setError(e.response.data.error);
    }
  };
    
    return (
        <>
            <Header>{patients[id].name} <Icon name={genderIcon()} /></Header>
            <p>ssn: {patients[id].ssn}</p>
            <p>occupation: {patients[id].occupation}</p>
            <h4>entries</h4>            
            {patients[id].entries?.map(entry => (                
                <EntryDetails key={entry.id} entry={entry} />                
            ))}
             <AddHospitalEntryModal
                hospitalModalOpen={hospitalModalOpen}
                onSubmit={submitNewHospitalEntry}
                error={error}
                onClose={closeModal}
            />
            <AddHealthCheckEntryModal
                healthCheckModalOpen={healthCheckModalOpen}
                onSubmit={submitNewHealthCheckEntry}
                error={error}
                onClose={closeModal}
            />
            <AddOccupationalEntryModal
                occupationalModalOpen={occupationalModalOpen}
                onSubmit={submitOccupationalEntry}
                error={error}
                onClose={closeModal}
            />

            <Button onClick={() => openHospitalModal()}>Add Hospital entry</Button>
            <Button onClick={() => openHealthCheckModal()}>Add Health Check entry</Button>
            <Button onClick={() => openOccupationalModal()}>Add Health Check entry</Button>
        </>
    );
};

export default ShowPatient;
