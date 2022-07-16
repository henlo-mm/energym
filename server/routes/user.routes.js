const users = require("../controllers/users.controller.js");
const { authJwt } = require("../middleware");

module.exports = app => {
    
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", users.allAccess);

  app.get("/api/test/user",
    [authJwt.verifyToken],
   users.userBoard
  );

  app.get("/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
   users.moderatorBoard
  );

  app.get("/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
   users.adminBoard
  );

  };