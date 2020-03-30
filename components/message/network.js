/*
Capa de red del componente message.
Este atenderá todas las periciones
*/

const express = require("express");
const response = require('../../network/response');

//agrega el controller que tendrá la lógica de negocio de este componente
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
    //pone en filter el user si viene en la query o null
    const filterMessages = req.query.user || null;

    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.sucess(req, res, messageList, 200);
        })
        .catch(e => {
            //le paso el detalle del error en e para que logee
            response.error(req, res, 'Error inesperado', 500, e);
        });
});

router.post('/', function (req, res) {
    //ojo, si esta mal formado el json da error esta funcion

    //esta info viene en var del body
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.sucess(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

//modifica parametros parciales
router.patch('/:id', function (req, res) {
    //hace update del param message nada mas del id enviado
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.sucess(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            //esta comilla invertida permite poner variable adentro con ${}
            response.sucess(req, res, `Id ${req.params.id} eliminado`, 201);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

//hago publico el modulo para que se pueda llamar
module.exports = router;