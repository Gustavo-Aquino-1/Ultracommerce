'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('avaliation', {
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "product", 
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "user", 
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        allowNull: false
      },
      rate: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING(3000)
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('avaliation');
  }
};