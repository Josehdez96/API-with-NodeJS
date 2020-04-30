const Model = require("./model"); //Interfaz especificada en otro archivo ||model||


function addMessage(message) {
  const myMessage = new Model(message); //10) Añadir mensajes a Mongoose
  myMessage.save(); //10.1) Lo guarda 
};

async function getMessages(filterUser) { //11) Traer mensajes (requerimiento asincrono)
  return new Promise((resolve, reject) => {
    let filter = {};  
    if (filterUser !== null) {
      filter = {user: filterUser} //traiga los usuarios que coincidan con el filtro
    }
    Model.find(filter) //Pide todos los documentos
      .populate("user") //Popular: Si esto es una referencia a otro dato, buscala e inserta aqui toda la información 
      .exec((error, populated) => { //ejecuta el populado
        if (error) {
          reject(error);
          return false; //Corte la ejecución
        }

        resolve(populated);
      })
  })
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