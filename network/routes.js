const express = require("express");
const message = require("../components/message/network");

const routes = function(server) { //6) Funcion que añade todas las rutas llamadas al server
  server.use("/message", message) //Todas las llamadas a ||/message|| vayan al componente message/network (donde está toda la logica de los mensajes y verbos HTTP)
}

module.exports = routes;