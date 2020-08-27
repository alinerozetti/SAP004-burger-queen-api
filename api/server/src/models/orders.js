'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    active: DataTypes.BOOLEAN,
    client: DataTypes.STRING,
    table: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.Products_x_order)
  };
 
  return orders;
};