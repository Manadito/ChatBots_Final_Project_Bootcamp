const mongoose = require("mongoose"); // Import library to use its methods and custom functionalities to manipulate MongoDB docs

const UserSchema = new mongoose.Schema( // Creating our schema (blueprint)
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minLength: [3, "First name must at least be 3 characters long"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minLength: [3, "Last name must at least be 3 characters long"],
    },
  },
  { timestamp: true } // This will add to our data 'createdAt' and 'updatedAt' key-value pairs everytime we create/change something
);

const UserModel = mongoose.model("User", UserSchema); // We define our model as a variable

module.exports = UserModel; // We export our model

// A Schema is the configuration object for a Mongoose model. It is how we setup our model. A SchemaType is the configuration object for an
// individual property within our model.
