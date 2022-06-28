const express = require("express");

const PORT = process.env.PORT || 5000;

const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

//db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
 });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/user.routes")(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
  