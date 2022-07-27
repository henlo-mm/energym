var pgtools = require("pgtools");
const dbConfig = require("../config/db.config.js");
const config = {
  user: "postgres",
  host: "localhost",
  password: "123",
  port: 5432
};
pgtools.createdb(config, "energymdb", function(err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});
