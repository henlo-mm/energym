module.exports = (sequelize, DataTypes) => {
    const Set = sequelize.define('set', {
      numReps: DataTypes.INTEGER,
      // weight in kg
      weight: DataTypes.DOUBLE,
    }, {
      /* classMethods: {
        associate: (models) => {
          // a set belongs to an exercise
          Set.belongsTo(models.Exercise);
        },
      }, */
    });
  
    return Set;
  };