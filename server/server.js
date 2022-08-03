const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const PORT = process.env.PORT || 5000;
const { Sequelize } = require('sequelize');
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "henlo-session",
    secret: "COOKIE_SECRET",
    httpOnly: true,
    sameSite: 'strict'
  })
);

//Base de datos

const db = require("./models");

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  
});


/* db.sequelize.sync(); */

app.get("/api", (req, res) => {
  res.json({ message: "ghgjgggggggggggggggghghjgjhg." });
});

require("./routes/user.routes")(app);
require("./routes/auth.routes")(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
  