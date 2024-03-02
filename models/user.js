// Importing necessary modules from Mongoose
const { Schema, model } = require("mongoose");

// Defining the user schema
const userSchema = new Schema({
    // Defining the username field
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // Defining the email field
    email: {
        type: String,
        required: true,
        unique: true,
        // Using a regex pattern to validate email format
        match: [/.+@|\..+/, "Must match an email address!"]
    },
    // Defining an array of references to Thought documents
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        }
    ],
    // Defining an array of references to User documents (for friends)
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
},
// Adding toJSON options for virtuals and excluding _id
{
    toJSON: {
        virtuals: true
    },
    id: false
});

// Defining a virtual for friend count
userSchema.virtual("friendCount").get(function () {
    // Returns the length of the friends array
    return this.friends.length;
});

// Creating the User model using the user schema
const User = model("User", userSchema);

// Exporting the User model
module.exports = User;
