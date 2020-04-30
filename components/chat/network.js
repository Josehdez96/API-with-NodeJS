const express = require("express");
const response = require("../../network/response")
const router = express.Router(); 
const controller = require("./controller")


router.get("/:userId", function (req, res) { 
  controller.listChats(req.params.userId)
    .then(users => {
      response.success(req, res, users, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpected error", 500, e)
    })
});

router.post("/", function (req, res) { //4)Atiende peticiones POST
  controller.addChat(req.body.users)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(e => {
      response.error(req, res, "Información invalida", 400, e)
    })
});

module.exports = router;