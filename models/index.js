// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_id',
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Belongs to many methods allow the product and tag models to query each other's information
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
