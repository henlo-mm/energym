module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", users.createUser);
  
    router.get("/", users.findAllUsers);
  
    router.get("/published", users.findAllMembership);
  
    router.get("/:id", users.findOneUser);
  
    router.put("/:id", users.updateUser);
  
    router.delete("/:id", users.deleteUser);
  
    router.delete("/", users.deleteAllUsers);
  
    app.use("/api/users", router);
  };