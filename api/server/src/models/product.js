'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    has_extra: DataTypes.BOOLEAN,
    is_burger:DataTypes.BOOLEAN
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.Products_x_order)
  };
  return Products;
};