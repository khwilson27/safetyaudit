module.exports = function (sequelize, DataTypes) {
  var Audit = sequelize.define("Audit", {
    site: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      len: [1]
    },
  });
  
  return Audit;
};
