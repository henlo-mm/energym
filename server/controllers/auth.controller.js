const db = require("../models");
const bcrypt = require("bcrypt");
const User = db.users;
const Op = db.Sequelize.Op;

  exports.login = async (req, res) => {

    const user =  await User.findOne({ where : { email : req.body.email }})
    if (user) {
        const password_valid = await bcrypt.compare(req.body.password,user.password);
        if (password_valid) {
            res.send("sassaas");
        }else {
            res.status(400).json({ error : "Password Incorrect" });
        }
        
    }
      /* .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      }); */
  };
  
 