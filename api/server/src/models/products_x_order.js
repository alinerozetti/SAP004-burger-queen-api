'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products_x_order = sequelize.define('Products_x_order', {
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER,
    add_egg: DataTypes.BOOLEAN,
    add_cheese: DataTypes.BOOLEAN,
    type_of_protein: DataTypes.STRING
  }, {});
  Products_x_Order.associate = function(models) {
    Products_x_order.belongsTo(models.Products)
    Products_x_order.belongsTo(models.Order)
  };
  return Products_x_order;
};