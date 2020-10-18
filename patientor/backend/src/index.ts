import express from 'express';
import diagnosesRouter from './routes/diagnoses';

const app = express();

app.use(express.json());
app.use(express.static('build'));
app.use('/api/diagnoses', diagnosesRouter);

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('i was pinged');
    res.send('pong'); 
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});