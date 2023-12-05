'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        id: 1,
        name: "Gustavo Aquino",
        email: "devgustma@gmail.com",
        password: "25d55ad283aa400af464c76d713c07ad"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {})
  }
};
