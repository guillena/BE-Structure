/*
Aunque mongoDB no sea necesario crearle schemas se usan estos en este ejmplo
para ser mas prolijo.
Uso mongoose para administrar los modelos y acceso a la BD
*/

const mongoose = require('mongoose');

//creamos el objeto schema
const Schema = mongoose.Schema;

//creamos un esquema
const mySchema = new Schema({
    user: String,
});

//creamos un model el cual le asignamos un schema
//este schema permitira mantener una estructura unificada
//En este caso los mensajes de tipo Message usaran el schema mySchema
const model = mongoose.model('user', mySchema);

module.exports = model;


