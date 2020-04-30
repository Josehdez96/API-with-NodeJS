const mongoose = require("mongoose"); //8)Permite crear esquemas (validaciones o interfaz) para MongoDB (que originalmente no la tiene)
const Schema = mongoose.Schema;

const mySchema = new Schema({ //8.1) Definimos propiedades y tipos que queramos tener en la DB
  chat: {
    type: Schema.ObjectId,
    ref: "Chat"
  },
  user: {
    type: Schema.ObjectId, //Utilizamos un tipo especial de Mongo (ObjectId es el id de cada usuario)
    ref: "User",
  },
  message: String,
  date: Date
});

const model = mongoose.model("Message", mySchema); //9) Llamamos al esquema que queremos y le decimos "Todo lo que se cree, tenga este esquema y se guarde en la DB con el nombre ||model||", recibe dos paraemtros (como se llama la coleccion en mongo, esquema que queremos usar)

module.exports = model;