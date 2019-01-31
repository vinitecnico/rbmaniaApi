var addUser = require('./add').add;
var removeUser = require('./remove').remove;
var updateUser = require('./update').update;
var filterUser = require('./filter').filter;

module.exports = {
  addUser,
  removeUser,
  updateUser,
  filterUser
}