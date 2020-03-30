/*
Capa de red del componente user.
Este atenderá todas las periciones
*/

const express = require("express");
const response = require('../../network/response');

//agrega el controller que tendrá la lógica de negocio de este componente
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
    //pone en filter el user si viene en la query o null
    const filterUsers = req.query.user || null;

    controller.getUsers(filterUsers)
        .then((userList) => {
            response.sucess(req, res, userList, 200);
        })
        .catch(e => {
            //le paso el detalle del error en e para que logee
            response.error(req, res, 'Error inesperado', 500, e);
        });
});

router.post('/', function (req, res) {
    //ojo, si esta mal formado el json da error esta funcion

    //esta info viene en var del body
    controller.addUser(req.body.user)
        .then((fullMessage) => {
            response.sucess(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

//router.delete('/:id', function(req, res) {});

//hago publico el modulo para que se pueda llamar
module.exports = router;