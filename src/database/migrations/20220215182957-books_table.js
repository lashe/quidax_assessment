'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("books", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      uuid: {
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
      },
      author: Sequelize.STRING,
      cover_img: Sequelize.STRING,
      title: Sequelize.STRING,
      about: Sequelize.TEXT,
      genre: Sequelize.STRING,
      tag: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
      price: Sequelize.FLOAT,
      year: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("books");
  }
};
