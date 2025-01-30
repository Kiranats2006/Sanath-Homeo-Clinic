const express = require('express');
const router = express.Router();

// GET ENDPOINTS
// all patients
router.get('/', (req, res) => {
    res.send('Fetch all patients');
});

// patient by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch patient with ID: ${id}`);
});

// patients by doctor ID
router.get('/doctor/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch all patients for doctor with ID: ${id}`);
});

// patients by appointment ID
router.get('/appointment/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch all patients for appointment with ID: ${id}`);
});

// patients by branch ID
router.get('/branch/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch all patients for branch with ID: ${id}`);
});

// patient contact details
router.get('/:id/contact', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch contact details for patient ID: ${id}`);
});

// patient medical history
router.get('/:id/medical-history', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch medical history for patient ID: ${id}`);
});

// patient prescriptions
router.get('/:id/prescriptions', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch prescriptions for patient ID: ${id}`);
});

// patient appointment history
router.get('/:id/appointments', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch appointment history for patient ID: ${id}`);
});

// patient feedback/reviews
router.get('/:id/reviews', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch feedback/reviews for patient ID: ${id}`);
});

module.exports = router;
