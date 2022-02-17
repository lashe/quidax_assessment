"use strict";
module.exports = (sequelize, DataTypes) => {
  const Likes = sequelize.define(
    "Likes",
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
      }
    },
    {
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      tableName: "likes",
    }
  );
  Likes.associate = function (models) {
    Likes.belongsTo(models.Books, {
      as: "likes",
     foreignKey: "book_id",
    });
  };
  return Likes;
};