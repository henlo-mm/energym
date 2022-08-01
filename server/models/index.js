const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("../models/user.model.js")(sequelize, Sequelize);
db.user_type = require("../models/user-type.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.set = require("../models/set.model.js")(sequelize, Sequelize);
db.exercise = require("../models/exercise.model.js")(sequelize, Sequelize);
db.exercise_type = require("../models/exercise-type.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.users.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});


db.set.belongsTo(db.users, {
  through: "client_id",
  foreignKey: "clientId",
});

db.set.belongsTo(db.users, {
  through: "instructor_id",
  foreignKey: "instructorId",
});
  
db.exercise.belongsTo(db.set, {
  through: "set_id",
  foreignKey: "setId",
});

db.exercise.hasMany(db.exercise_type, {
  through: "exercise_type_id",
  foreignKey: "exerciseTypeId",
});
  
db.ROLES = ["user", "admin", "moderator"];

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;