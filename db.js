//obtengo el modulo de mongoose
const db = require('mongoose');

//'mongodb+srv://db_user:sistran2010@cluster0-skzzm.mongodb.net/test?retryWrites=true&w=majority'
async function connect(url) {
    //le paso al objeto db la instancia de gestion de promesas, es decir, la libreria
    //que maneja las promesas en la instancia de este modulo.
    //Se pueden usar otras librerias de gestion de promesas.
    //global es parte del scope global de nodejs
    db.Promise = global.Promise;

    //me conecto a mongoDB. el parametro es para que no existe problema de compatibilidad
    await db.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    console.log('[db] Conectada con éxito');
}

module.exports = connect;