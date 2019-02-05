var addUser = require('./user/add').add;
var removeUser = require('./user/remove').remove;
var updateUser = require('./user/update').update;
var filterUser = require('./user/filter').filter;
var loginUser = require('./user/login').login;

module.exports = {
  addUser,
  removeUser,
  updateUser,
  filterUser,
  loginUser
}