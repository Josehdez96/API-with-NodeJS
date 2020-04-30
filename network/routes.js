const message = require("../components/message/network");
const user = require("../components/user/network");

const routes = function(server) { //6) Funcion que añade todas las rutas llamadas al server
  server.use("/message", message); //Todas las llamadas a ||/message|| vayan al componente message/network (donde está toda la logica de los mensajes y verbos HTTP)
  server.use("/user", user);
}

module.exports = routes;