module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('exercise', {
      note: DataTypes.STRING,
    });
  
    return Exercise;
  };