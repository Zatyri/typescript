import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import AddHealthCheckEntryForm, { HealthCHeckEntryFormValues } from './AddHealthCheckEntryForm';
import AddHospitalEntryForm, { HospitalEntryFormValues } from './AddHospitalEntryForm';
import AddOccupationalEntryForm, { OccupationalEntryFormValues } from './AddOccupationalEntryForm';

interface HospitalProps {
    hospitalModalOpen: boolean;
    onClose: () => void;
    onSubmit: (values: HospitalEntryFormValues) => void;
    error?: string;
  }

  interface HealthCheckProps {    
    healthCheckModalOpen: boolean;    
    onClose: () => void;
    onSubmit: (values: HealthCHeckEntryFormValues) => void;
    error?: string;
  }

  interface OccupationalProps {
    occupationalModalOpen: boolean;
    onClose: () => void;
    onSubmit: (values: OccupationalEntryFormValues) => void;
    error?: string;
  }

export const AddHospitalEntryModal = ({ hospitalModalOpen, onClose, onSubmit, error }: HospitalProps) => (
    <Modal open={hospitalModalOpen} onClose={onClose} centered={false} closeIcon>
        <Modal.Header>Add new hospital entry</Modal.Header>
        <Modal.Content>
        {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
        <AddHospitalEntryForm onSubmit={onSubmit} onCancel={onClose} />
        </Modal.Content>
    </Modal>
);
export const AddHealthCheckEntryModal = ({ healthCheckModalOpen, onClose, onSubmit, error }: HealthCheckProps) => (
    <Modal open={healthCheckModalOpen} onClose={onClose} centered={false} closeIcon>
        <Modal.Header>Add new Health check entry</Modal.Header>
        <Modal.Content>
        {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
        <AddHealthCheckEntryForm onSubmit={onSubmit} onCancel={onClose} />
        </Modal.Content>
    </Modal>
);

export const AddOccupationalEntryModal = ({ occupationalModalOpen, onClose, onSubmit, error }: OccupationalProps) => (
    <Modal open={occupationalModalOpen} onClose={onClose} centered={false} closeIcon>
        <Modal.Header>Add new Occupational health entry</Modal.Header>
        <Modal.Content>
        {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
        <AddOccupationalEntryForm onSubmit={onSubmit} onCancel={onClose} />
        </Modal.Content>
    </Modal>
);

