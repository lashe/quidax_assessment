"use strict";
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define(
    "Books",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      genre: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      about: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      tag: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      year: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cover_img: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      tableName: "books",
    }
  );
  Books.associate = function (models) {
    Books.hasMany(models.Ratings, { as: "rating", foreignKey: "book_id" });
    Books.hasMany(models.Likes, { as: "likes", foreignKey: "book_id" });
  };

  return Books;
}; 