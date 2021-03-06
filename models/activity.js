'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    activity: DataTypes.STRING,
    startDate: DataTypes.DATE,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    userId: DataTypes.INTEGER
  }, {});


  Activity.associate = function(models) {
    // associations can be defined here
    // Activity.belongsTo(models.User,{foreignKey: 'userId'});
    // models.User.hasOne(Activity,{foreignKey: 'userId'});
  };
  return Activity;
};