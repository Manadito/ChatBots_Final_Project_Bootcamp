// We import the controller methods from our controllers folder and the Express Third-party Library
const {
  getAllUsers,
  getOneUserById,
  deleteOneUserById,
  createNewUser,
  deleteAllUsers,
} = require("..//controllers/user.controller"); // We destructure this object literal to obtain createNewUser
const express = require("express"); // This imports the express library

// We create a router instance
const UserRouter = express.Router(); // This is a class used to create modular, mountable route handlers

// We link routes with the particular controller methods (from the controllers we create in controllers.js)
UserRouter.get("/", getAllUsers); // We can reduce "/api/users" to "/"
UserRouter.get("/:id", getOneUserById);
UserRouter.post("/", createNewUser);
UserRouter.delete("/:id", deleteOneUserById); // Remember to always use the correct verb
UserRouter.delete("/", deleteAllUsers);

// We export the Router method we have just created
module.exports = UserRouter;
