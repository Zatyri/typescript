import { Field, Formik, Form } from 'formik';
import React from "react";
import { Button, Grid } from 'semantic-ui-react';
import { useStateValue } from '../state';
import { HospitalEntry } from '../types';
import { DiagnosisSelection, TextField } from './EntryField';

export type HospitalEntryFormValues = Omit<HospitalEntry, "id">;

export type TypeOption = {
  value: string;
  label: string;
};

interface Props {
  onSubmit: (values: HospitalEntryFormValues) => void;
  onCancel: () => void;
}

const AddHospitalEntryForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const [{ diagnosis }] = useStateValue();

  return (
    <Formik    
    initialValues={{
      description: "",
      date: "",
      specialist: "",
      type: "Hospital",
      discharge: {
        date: "",
        criteria: ""
      }      
    }}
    onSubmit={onSubmit}
    validate={values => {
      const requiredError = "Field is required";
        const errors: { [field: string]: string } = {};
        if (!values.date) {
          errors.name = requiredError;
        }
        if (!values.type) {
          errors.ssn = requiredError;
        }
        if (!values.description) {
          errors.dateOfBirth = requiredError;
        }
        if (!values.specialist) {
          errors.occupation = requiredError;
        }
        return errors;
    }
  }
  >
    {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
      return (
        <Form className="form ui" >                    
          <Field
              label="Description"
              placeholder="Description"
              name="description"
              component={TextField}
            />
            <Field
              label="Date"
              placeholder="YYYY-MM-DD"
              name="date"
              component={TextField}
            />
            <Field
              label="Specialist"
              placeholder="Specialist"
              name="specialist"
              component={TextField}
            />
            <Field
              label="Discharge Date"
              placeholder="YYYY-MM-DD"
              name="discharge.date"
              component={TextField}
            />
            <Field
              label="Discharge Criteria"
              placeholder="Discharge Criteria"
              name="discharge.criteria"
              component={TextField}
            />
          <DiagnosisSelection
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            diagnoses={Object.values(diagnosis)}
          />    
          <Grid>
            <Grid.Column floated="left" width={5}>
              <Button type="button" onClick={onCancel} color="red">
                Cancel
              </Button>
            </Grid.Column>
            <Grid.Column floated="right" width={5}>
              <Button
                type="submit"
                floated="right"
                color="green"
                disabled={!dirty || !isValid}
              >
                Add
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      );
    }}
  </Formik>
  );
};

export default AddHospitalEntryForm;
