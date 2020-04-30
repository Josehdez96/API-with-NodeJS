const db = require("mongoose"); 

db.Promise = global.Promise; //9.1) Le dice a Mongo DB, "utiliza esta librería de Node JS para manejar cualquier promesa"

async function connect(url) {
    await db.connect(url, { //9)Conectar la DB
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("[db] Conectada con exito");
};

module.exports = connect;



