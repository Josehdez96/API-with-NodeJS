const store = require("./store");

function addUser(name) {
  if (!name) {
    return Promise.reject("Invalid name"); //Devolver un reject por defecto de la clase Promesa (clase nativa de NodeJS)
  }
  const user = {
    name,
  };
  return store.add(user)
}

function getUsers(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.userList(filterUser));
  })
};

module.exports = {
  addUser,
  getUsers
}