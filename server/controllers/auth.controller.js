const db = require("../models");
const config = require("../config/auth.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = db.users;
const Role = db.role;
const Op = db.Sequelize.Op;

exports.signUp = async (req, res) => {
  try {

    const salt = await bcrypt.genSalt(10);

    const users = {
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        second_last_name: req.body.second_last_name,
        document_type: req.body.document_type,
        document_number: req.body.document_number,
        birth_date: req.body.birth_date,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
        has_membership: req.body.has_membership ? req.body.has_membership : false
    };
  
    const user = await User.create(users)
      if (req.body.roles) {
        const roles = await Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        });
  
        const result = user.setRoles(roles);
        if (result) res.send({ message: "User registered successfully!" });
      } else {
        // user has role = 1
        const result = user.setRoles([1]);
        if (result) res.send({ message: "User registered successfully!" });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  
  };
    
  exports.login = async (req, res) => {

    const user =  await User.findOne({ where : { email: req.body.email }})
 
    try {
      if (!user) {
        res.status(401).json({
          message: "Login not successful",
          error: "User not found",
        })
       
      }

        const password_valid = await bcrypt.compare(req.body.password,user.password);

        if (!password_valid) {
          res.status(400).json({ error : "Invalid Password" });
        }
        const token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400, // 24 hours
        });
    
        let authorities = [];
        const roles = await user.getRoles();
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
    
        req.session.token = token;
    
        return res.status(200).send({
          id: user.id,
          email: user.email,
          roles: authorities,
          token: token,
        });
      } catch (error) {
        return res.status(500).send({ message: error.message });
      }
      
  };
  
 