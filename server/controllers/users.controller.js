const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.createUser = async (req, res) => {
    // Validate request
    if (!req.body.first_name && !req.body.last_name && !req.body.email && !req.body.password) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    

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
        password:  await bcrypt.hash(req.body.password, salt),
        has_membership: req.body.has_membership ? req.body.has_membership : false
    };

    await User.create(users)
    .then(data => {
        res.send(data);
       
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };
  

  exports.findAllUsers = (req, res) => {
    const name = req.query.first_name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });
  };
  
  // Find a single User with an id
  exports.findOneUser = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
  };
  
  // Update a User by the id in the request
  exports.updateUser = (req, res) => {
    const id = req.params.id;
  
    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };
  
  // Delete a User with the specified id in the request
  exports.deleteUser = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };
  
  // Delete all Users from the database.
  exports.deleteAllUsers = (req, res) => {
    User.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Users were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Users."
        });
      });
  };
  
  exports.findAllMembership = (req, res) => {
    User.findAll({ where: { has_membership: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });
  };