'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, Event }) {

     StageEvent.BelongsTo(Stage, { 
        foriegnKey: "stage_id",

     })
     StageEvent.BelongsTo(Event, { 
      foriegnKey: "event_id"
     })
    }
  }
  StageEvent.init({
    stage_event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'StageEvent',
    tableName: 'stage_events',
    timestamps: false

  });
  return StageEvent;
};