const express = require("express");
const bodyParser = require("body-parser"); //5)Trae Extensión de Express para trabajar con el body de la petición 

const connect = require("./db"); //Trae la conexión a la  DB

const router = require("./network/routes"); //3.1)Trae el router que permite usar verbos HTTP

connect("mongodb+srv://db_user_practice:12345678a@cluster0-u3ayl.mongodb.net/test"); //llama la URL de la DB para conectarla

var app = express(); //1)Inicializar nuestro (servidor) express 
app.use(bodyParser.json()); //6)Especifica que tipo de body quiero recibir ||.json||
router(app); //3.2)Activar router

app.use("/app", express.static("public"));

app.listen(3000); //2)Escuchará en el puerto 3000
console.log("La aplicación está escuchando en http://localhost:3000");