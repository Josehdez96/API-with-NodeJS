const db = require("mongoose"); 
const Model = require("./model"); //Interfaz especificada en otro archivo ||model||

db.Promise = global.Promise; //9.1) Le dice a Mongo DB, "utiliza esta librería de Node JS para manejar cualquier promesa"
db.connect("mongodb+srv://db_user_practice:12345678a@cluster0-u3ayl.mongodb.net/test", { //9)Conectar la DB
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log("[db] Conectada con exito");

function addMessage(message) {
  const myMessage = new Model(message); //10) Añadir mensajes a Mongoose
  myMessage.save(); //10.1) Lo guarda
};

async function getMessages(filterUser) { //11) Traer mensajes (requerimiento asincrono)
  let filter = {};  
  if (filterUser !== null) {
    filter = {user: filterUser} //traiga los usuarios que coincidan con el filtro
  }
  const messages = await Model.find(filter); //Pide todos los documentos
  return messages; //Retorna todos los documentos/mensajes
};

async function updateText(id, message) {
  const foundMessage = await Model.findOne({ //Buscara un mensaje con el id: id
    _id: id
  });

  foundMessage.message = message; //El antiguo mensaje es igual al nuevo mensaje que llegó como parametro
  
  const newMessage = await foundMessage.save(); //Guarda el nuevo mensaje
  return newMessage;
};

function removeMessage(id) {
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addMessage, //Establece un nombre ||add|| para la función
  list: getMessages,
  updateText: updateText,
  remove: removeMessage
}