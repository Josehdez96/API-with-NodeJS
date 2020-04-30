const Model = require("./Model");

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
};

async function getUsers(filterUser) {
  let filter = {};  
  if (filterUser !== null) {
    filter = {user: filterUser} //traiga los usuarios que coincidan con el filtro
  }
  const users = await Model.find(filter); //Pide todos los usuarios
  return users; //Retorna todos los usuarios
};

module.exports = {
  add: addUser,
  userList: getUsers,
}