'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('order', [{
      clientName: "Carol",
      table: 1,
      status: "Pendente",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('order', null, {});
  }
};
