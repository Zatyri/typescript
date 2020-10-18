import express from 'express';
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';

const app = express();

app.use(express.json());
app.use(express.static('build'));

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientsRouter);

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('i was pinged');
    res.send('pong'); 
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});