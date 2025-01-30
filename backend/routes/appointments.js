const express = require('express');
const router = express.Router();
//GET ENDPOINTS
// all appointments
router.get('/', (req, res) => {
    res.send('Fetch all appointments');
});

// appointment by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch appointment with ID: ${id}`);
});

// appointments for a specific patient
router.get('/patient/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch all appointments for patient with ID: ${id}`);
});

// ppointments for a specific doctor
router.get('/doctor/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch all appointments for doctor with ID: ${id}`);
});

// available appointment slots (for booking)
router.get('/available-slots', (req, res) => {
    res.send('Fetch all available appointment slots');
});

// all completed appointments
router.get('/completed', (req, res) => {
    res.send('Fetch all completed appointments');
});

// appointments by date
router.get('/date/:date', (req, res) => {
    const { date } = req.params;
    res.send(`Fetch all appointments on ${date}`);
});

// all upcoming appointments
router.get('/upcoming', (req, res) => {
    res.send('Fetch all upcoming appointments');
});

module.exports = router;
