const db = require("../models");
const Role = db.role;
const User = db.users;
const Op = db.Sequelize.Op;
checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    
    // Email
    user = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user) {
      return res.status(400).send({
        message: "Failed! Email is already in use!"
      });
    }

    next();
    
  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    console.log(req.body.roles)
    for (let i = 0; i < req.body.roles.length; i++) {
      const roles = Role.findAll({
        where: {
          id: {
            [Op.eq]: req.body.roles,
          },
        },
      });
      
      
      if (!roles) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;