const socketIO = require("socket.io");
const socket = {};

function connect(server) {
  socket.io = socketIO(server) //Inicializando ||io|| dentro de la variable socket
}

module.exports = {
  connect,
  socket
}