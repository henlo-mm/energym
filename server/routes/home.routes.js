const home = require("../controllers/home.controller.js");
const { authJwt } = require("../middleware");

module.exports = app => {
    
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", home.allAccess);

    app.get("/api/test/user",
        [authJwt.verifyToken],
        home.userBoard
    );

    app.get("/api/test/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        home.moderatorBoard
    );

    app.get("/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        home.adminBoard
    );

  };