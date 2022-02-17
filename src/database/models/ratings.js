"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define(
    "Ratings",
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
      star: {
        allowNull: false,
        type: DataTypes.INTEGER,
      }
    },
    {
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      tableName: "ratings",
    }
  );
  Ratings.associate = function (models) {
    Ratings.belongsTo(models.Books, {
      as: "rating",
     foreignKey: "book_id",
    });
  };
  return Ratings;
};