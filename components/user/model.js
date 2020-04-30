const mongoose = require("mongoose"); //8)Permite crear esquemas (validaciones o interfaz) para MongoDB (que originalmente no la tiene)

const Schema = mongoose.Schema;

const mySchema = new Schema({ //8.1) Definimos propiedades y tipos que queramos tener en la DB
  name: String,
});

const model = mongoose.model("User", mySchema); //9) Llamamos al esquema que queremos y le decimos "Todo lo que se cree, tenga este esquema y se guarde en la DB con el nombre ||model||", recibe dos paraemtros (como se llama la coleccion en mongo, esquema que queremos usar)

module.exports = model;