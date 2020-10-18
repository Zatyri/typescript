import express from 'express';
import patietnService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patietnService.getNonSensitiveData());
});

export default router;
