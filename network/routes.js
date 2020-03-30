/*
Todas las rutas estaran en este archivo.
Al agregar un nuevo componentes, si tiene rutas diferentes se agrega acá.
Se controla todas las rutas en un solo lugar permitiendo cambiar para todas.
*/

const express = require('express');

//traigo el middleware que atendera en la ruta
const message = require('../components/message/network'); 

//server es la instancia de express
const routes = function (server) {

    //configuta la instancia de express agregando el component que atendera
    //esa ruta (de carpeta componets)
    server.use('/message', message);
}

//hago publico el modulo para que se pueda llamar
module.exports = routes;