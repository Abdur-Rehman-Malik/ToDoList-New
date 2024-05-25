// // const route = require("express").Router();
// const userController = require("../controller/userController");

// route.post("/user", userController.createUser);

// module.exports = route;

const route = require("express").Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
} = require("../controller/userController");

route.get("/getAllUsers", getAllUsers);
route.post("/createUser", createUser);
route.delete("/deleteUser", deleteUser);
// route.put("/updateUser", updateUser);

module.exports = route;
