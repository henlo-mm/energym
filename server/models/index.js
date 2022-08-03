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
db.instructor = require("../models/instructor.model.js")(sequelize, Sequelize);
db.user_type = require("../models/user-type.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.set = require("../models/set.model.js")(sequelize, Sequelize);
db.exercise = require("../models/exercise.model.js")(sequelize, Sequelize);
db.exercise_type = require("../models/exercise-type.model.js")(sequelize, Sequelize);

/* db.role.belongsTo(db.users, {
  through: "id",
  foreignKey: "role_id",
  otherKey: "user_id"
}); */

db.users.belongsTo(db.role, {
  through: "id",
  foreignKey: "user_id",
  otherKey: "role_id"
});

db.users.belongsTo(db.user_type, {
  through: "id",
  foreignKey: "user_type_id",
});


db.set.belongsTo(db.users, {
  through: "id",
  foreignKey: "client_id",
});

db.set.belongsTo(db.instructor, {
  through: "id",
  foreignKey: "instructor_id",
});
  
db.exercise.belongsTo(db.set, {
  through: "id",
  foreignKey: "set_id",
});

db.exercise.belongsTo(db.exercise_type, {
  through: "id",
  foreignKey: "exercise_type_id",
});
  
db.ROLES = ["user", "admin", "moderator"];

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;