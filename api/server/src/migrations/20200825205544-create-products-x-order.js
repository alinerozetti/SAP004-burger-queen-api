'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products_x_order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {model:'product', key:'id'}
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {model:'orders', key:'id'}
      },
      qtd: {
        type: Sequelize.INTEGER
      },
      add_egg: {
        type: Sequelize.BOOLEAN
      },
      add_cheese: {
        type: Sequelize.BOOLEAN
      },
      type_of_protein: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products_x_order');
  }
};