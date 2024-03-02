// Import the mongoose library
const mongoose = require("mongoose");

// Define the MongoDB connection URI
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/socialmedia";

// Connect to MongoDB using the provided URI
mongoose.connect(mongoURI, {
    useNewUrlParser: true, // Use new URL parser
    useUnifiedTopology: true // Use new Server Discovery and Monitoring engine
});

// Export the mongoose connection to be used in other parts of the application
const dbConnection = mongoose.connection;

module.exports = dbConnection;
