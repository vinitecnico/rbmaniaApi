const addUser = require('./user/add').add;
const removeUser = require('./user/remove').remove;
const updateUser = require('./user/update').update;
const filterUser = require('./user/filter').filter;
const loginUser = require('./user/login').login;
const addProduct = require('./product/add').add;
const updateProduct = require('./product/update').update;
const removeProduct = require('./product/remove').remove;

module.exports = {
  addUser,
  removeUser,
  updateUser,
  filterUser,
  loginUser,
  addProduct,
  updateProduct,
  removeProduct
}