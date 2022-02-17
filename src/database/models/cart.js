"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      book_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      item_count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      }
    },
    {
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      tableName: "cart",
    }
  );
  return Cart;
};