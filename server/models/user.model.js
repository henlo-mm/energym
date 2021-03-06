module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("user", {
      first_name: {
        type: Sequelize.STRING
      },
      middle_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      second_last_name: {
        type: Sequelize.STRING
      },
      document_type: {
        type: Sequelize.STRING
      },
      document_number: {
        type: Sequelize.INTEGER
      },
      birth_date: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      has_membership: {
        type: Sequelize.BOOLEAN
      }
    });
    return User;
  };