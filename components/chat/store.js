const Model = require("./model"); //Interfaz especificada en otro archivo ||model||


function addChat(chat) {
  const myChat = new Model(chat); 
  return myChat.save(); 
};

async function listChats(userId) { 
  return new Promise((resolve, reject) => {
    let filter = {};   //Preparamos el filtro para poder filtrar por usuarios
    if (userId) {
      filter = {
        user: userId
      } 
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


module.exports = {
  add: addChat, //Establece un nombre ||add|| para la función
  list: listChats,
}