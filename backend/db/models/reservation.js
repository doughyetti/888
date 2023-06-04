'use strict';

const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reservation.belongsTo(models.Customer, { foreignKey: "customerId", onDelete: "CASCADE" });
      Reservation.hasOne(models.Table, { foreignKey: "tableId", onDelete: "CASCADE" });
    }
  }
  Reservation.init({
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    bookingDate: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Reservation',
    defaultScope: {
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    }
  });
  return Reservation;
};
