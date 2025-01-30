const express = require('express');
const router = express.Router();

// GET ENDPOINTS
// all branches
router.get('/', (req, res) => {
    res.send('Fetch all branches');
});

// branch by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch branch with ID: ${id}`);
});

// branch contact details
router.get('/:id/contact', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch contact details for branch ID: ${id}`);
});

// branch operating hours
router.get('/:id/hours', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch operating hours for branch ID: ${id}`);
});

// services available at a branch
router.get('/:id/services', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch services available at branch ID: ${id}`);
});

//reviews
router.get('/:id/reviews', (req, res) => {
    const { id } = req.params;
    res.send(`Fetch all patient reviews for branch ID: ${id}`);
});

//total-chain-reviews
router.get('/reviews', (req, res) => {
    res.send(`Fetch all patient reviews for chain of clinics`);
});

module.exports = router;
