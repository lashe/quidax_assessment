'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("likes", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      user_id: Sequelize.STRING,
      book_id: Sequelize.STRING,
      status: Sequelize.BOOLEAN,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("likes")
  }
};
