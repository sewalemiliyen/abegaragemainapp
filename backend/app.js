//import the express module
const express = require('express');
//import the dotenv module and call the config method to load the environment variables
require('dotenv').config();
//import the sanitizer module
const sanitize = require('sanitize');
// Import the CORS module 
const cors = require('cors');
// Set up the CORS options to allow requests from our front-end 
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
};
//create a variable to hold our port number
const port = process.env.PORT;
//import the router
const router=require('./routes')
//create the web server
const app = express();
// Add the CORS middleware
app.use(cors(corsOptions));
// Add the express.json middleware to the application
app.use(express.json());
// Add the sanitizer to the express middleware 
app.use(sanitize.middleware);
//add the route to the application as middelware
app.use(router);
//start the web server 
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
//export the web server for use the application
module.exports=app;