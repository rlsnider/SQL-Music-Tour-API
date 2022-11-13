'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, StageEvent }) {
      Event.belongsToMany(Stage, { 
        foreignKey: "event_id",
        as: "stages",
        through: StageEvent
      })
      Event.belongsToMany
    }
  }
  Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  });
  return Event;
};