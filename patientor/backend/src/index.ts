import express from 'express';
import cors from 'cors';
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';
import entriesRouter from './routes/entries';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('build'));

app.use('/api/diagnosis', diagnosesRouter);
app.use('/api/patients', patientsRouter);
app.use('/api/patients/', entriesRouter);


const PORT = 3001;

app.get('/api/ping', (_req, res) => {
        res.send('pong'); 
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});