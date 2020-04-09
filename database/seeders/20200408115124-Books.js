'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Learning node with Blake',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Learning something with Jaime',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
  }
};