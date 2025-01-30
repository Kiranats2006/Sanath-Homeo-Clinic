const express = require('express');
const router = express.Router();

// GET ENDPOINTS
// all notifications
router.get('/', (req, res) => {
    res.send('Fetch all notifications');
});

// notification by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch notification with ID: ${id}`);
});

// notifications for a specific patient
router.get('/patient/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch all notifications for patient ID: ${id}`);
});

// notifications for a specific doctor
router.get('/doctor/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch all notifications for doctor ID: ${id}`);
});

// appointment reminders
router.get('/reminders/appointments', (req, res) => {
    res.send('Fetch all appointment reminder notifications');
});

// medication reminders
router.get('/reminders/medications', (req, res) => {
    res.send('Fetch all medication reminder notifications');
});

// system alerts
router.get('/system-alerts', (req, res) => {
    res.send('Fetch all system alert notifications');
});

// feedback and review notifications
router.get('/feedback-reviews', (req, res) => {
    res.send('Fetch all feedback and review notifications');
});

module.exports = router;
