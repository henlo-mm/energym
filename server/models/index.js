const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("d64ai0bil7bkqr", "ihkdysdwgqlwki", "48fa146fe1b1b95f1104cd432bcce6ce9d12cadf9c66d1516386022db6b6930a", {
  host: "energym-point-prod.herokuapp.com",
  dialect: "postgres",
  protocol: "postgres",
  port: 5432,
  operatorsAliases: false,
  /* pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  } */
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("../models/user.model.js")(sequelize, Sequelize);
db.instructor = require("../models/instructor.model.js")(sequelize, Sequelize);
db.user_type = require("../models/user-type.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.set = require("../models/set.model.js")(sequelize, Sequelize);
db.exercise = require("../models/exercise.model.js")(sequelize, Sequelize);
db.exercise_type = require("../models/exercise-type.model.js")(sequelize, Sequelize);


/* db.role.belongsToMany(db.users, {
  through: "id",
  foreignKey: "user_id",
  otherKey: "user_id"
}); */

//db.role.hasOne(db.users);

db.users.belongsTo(db.role, {
  through: "id",
  foreignKey: "role_id",

});

/* db.instructor.belongsTo(db.role, {
  as: 'Role',
  through: "id",
  foreignKey: "role_id",
}); */

/* 
User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
User.sync({ force: true }) - This creates the table, dropping it first if it already existed
User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
*/

db.exercise.belongsTo(db.exercise_type, {
  as: 'Type',
  through: "exercise_type",
  foreignKey: "exercise_type_id",
});

  
/* db.user_type.hasOne(db.users, {
  through: "id",
  foreignKey: "user_type_id",
});
 */

db.set.belongsTo(db.users, {
  as: 'User',
  through: "id",
  foreignKey: "user_id",
});

db.set.belongsTo(db.users, {
  as: 'Instructor',
  through: "id",
  foreignKey: "instructor_id",
});
  
db.set.belongsTo(db.exercise, {
  as: 'Exercise',
  through: "id",
  foreignKey: "exercise_id",
});

/* db.users.sync({ force: true }) */

module.exports = db;