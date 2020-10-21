// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))
app.use(require('./routes/root'));
app.use(require('./routes/getAll'));


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));