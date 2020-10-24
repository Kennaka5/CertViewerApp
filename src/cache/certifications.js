require("dotenv").config();
const axios = require("axios");

const apiKey = process.env.API_KEY;

const certificationURL = `https://sheets.googleapis.com/v4/spreadsheets/1BtWFSIqI1Qjg3mqTvOAjmrmX9PkGnyM9dakXk5sM4C8/values/Sheet1?key=${apiKey}`;

const certifications = [];

axios
  .get(certificationURL)
  .then((res) => {
    const rawData = res.data.values;
    //get keys for objects
    const keys = rawData[0];
    //remove first array and use remaining arrays as values
    const values = rawData.slice(1);
    //Map though array of values
    const records = values.map((array) => {
      const record = {};
      //for each key set key(irrator) to record key and set the value to the irrated array value
      keys.forEach((key, i) => (record[key] = array[i]));
      return record;
    });

    records.forEach(r => {
      certifications.push(r);
    });
  })
  .catch((error) => console.log(error));

module.exports = certifications;
