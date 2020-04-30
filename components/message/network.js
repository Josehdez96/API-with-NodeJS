const express = require("express");
const multer = require("multer"); //Se encarga de todo lo que tenga que ver con transmición de archivos, gestión de tipo, etc

const response = require("../../network/response")
const router = express.Router(); //3)Invoco Router para trabajar con verbos HTTP
const controller = require("./controller") //7) Trae al controlador de funciones

const upload = multer({ //Que queremos hacer con el multer
  dest: "uploads/", //mandar los archivos a uploads
}) 

router.get("/", function (req, res) { //4)Atiende peticiones GET
  const filterMessages = req.query.user || null; //||filterMessages|| puede ser ||req.query.user|| o si no existe el anterior, puede ser ||null||
  controller.getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 200); //5)Llama a response.success
    })
    .catch(e => {
      response.error(req, res, "Unexpected error", 500, e)
    })
});

router.post("/", upload.single("file"),function (req, res) {  //||upload.single("file")|| le decimos a multer de donde sacar el archivo con||.single|| solo tiene un archivo y ||("file")|| le decimos el nombre del archivo

  controller.addMessage(req.body.chat, req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, "Información invalida", 400, "Error en el controlador")
    })
});

router.patch("/:id", function (req, res) { //11) Especifica el ID del usuario que voy a modificar
  controller.updateMessage(req.params.id, req.body.message) //||req.params.id|| lo que venga en los parametros como ||id||, traerlo
    .then((data) => {
      response.success(req, res, data, 200)
    })
    .catch(e => {
      response.error(req, res, "Error interno", 500, e)
    });
});

router.delete("/:id", function (req, res) {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
      response.erro(req, res, "Error interno", 500, e)
    })
})

module.exports = router;