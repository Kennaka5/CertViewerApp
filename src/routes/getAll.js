const express = require("express");
const certifications = require("../cache/certifications");

const router = express.Router();

router.get("/records.json", function (req, res) {
  //res.json(certifications)
  //   const formatCertifications = certifications;
  //   console.log('"/records.json"', certifications);
  if (req.query.q) {
    const queryParam = req.query.q.toLowerCase();
    const filterQuery = certifications.filter((person) => {
      const [first, last, certNumber] = Object.values(person);
      let result = false;

      if (first) {
        result = result || first.toLowerCase().includes(queryParam);
      }
      if (last) {
        result = result || last.toLowerCase().includes(queryParam);
      }
      if (certNumber) {
        result = result || certNumber.includes(queryParam);
      }

      return result;
    });

    res.json({ ok: true, value: filterQuery });
  } else {
    res
      .status(400)
      .json({ ok: false, message: "missing required q (query) param." });
  }
});

module.exports = router;
