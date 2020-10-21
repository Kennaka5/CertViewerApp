const express = require('express');

const router = express.Router();

router.get("/", function (req, res) {
    res.send("<h1>Cert Viewer App is routing!</h1>")
});

module.exports = router;