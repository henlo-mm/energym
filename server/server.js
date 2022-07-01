const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync();

/* db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
 }); */

app.get("/api", (req, res) => {
  res.json({ message: "ghgjgggggggggggggggghghjgjhg." });
});

var user = require("./routes/user.routes")(app);
var auth = require("./routes/auth.routes")(app);

/* app.use("/users", user);
app.use("/login", auth);
 */
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
  