const express = require("express");

//libreria para parsear diferentes formatos
const bodyParser = require("body-parser");

//modulo db que conecta a la bd
const db = require('./db');

//este modulo tendra todas las rutas 
const router = require('./network/routes')

//en app tendre la instancia de express
var app = express();

//me conecto a la bd
db('mongodb+srv://db_user:sistran2010@cluster0-skzzm.mongodb.net/test?retryWrites=true&w=majority');

//agrega el parser json en express
app.use(bodyParser.json()); 

//le paso al router la instancia de express para que agrege las rutas
router(app);  

app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000'); 