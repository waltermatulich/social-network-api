// Import the express library
const express = require("express");

// Import the MongoDB connection from the config/connection module
const db = require("./config/connection");

// Define the port to listen on, defaulting to 3001 if not specified in environment variables
const PORT = process.env.PORT || 3001;

// Create an Express application
const app = express();

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Once the MongoDB connection is open, start the Express server
db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on PORT ${PORT}`);
    });
});
