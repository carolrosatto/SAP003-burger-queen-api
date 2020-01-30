'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: 'Água 700ml',
      price: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Café americano',
      price: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Água 500ml',
      price: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Misto quente',
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Batata frita',
      price: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Café com leite',
      price: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hamburguer simples',
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Refrigerante 500ml',
      price: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Refrigerante 750ml',
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Suco natural',
      price: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Anéis de cebola',
      price: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Hamburguer duplo',
      price: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
