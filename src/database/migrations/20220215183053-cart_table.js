'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("cart", {
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
      user_id: Sequelize.STRING,
      book_id: Sequelize.STRING,
      status: Sequelize.BOOLEAN,
      item_count: Sequelize.INTEGER,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("cart")
  }
};
