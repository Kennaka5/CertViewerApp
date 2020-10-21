const express = require('express');
const certifications = require('../cache/certifications');

const router = express.Router();

router.get("/records.json", function (req, res) {
 //console.log('"/records.json"',certifications)
 res.json(certifications)
});

module.exports = router;
