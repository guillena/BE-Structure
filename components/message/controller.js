/*
Tendrá lo lógica de este component
*/

//importe el module store
const store = require('./store');

//define la funcion sin export. Luego la exporta al final
function addMessage(user, message) {
    return new Promise((resolve, reject) => {

        //si user o message vacio devulevo error
        if (!user || !message) {
            console.error('[messageControle] No hay usuario o mensaje');

            //el reject y return de la promise
            reject('Los datos son incorrectos');
            return false;
        }
        
        //crea una estructura de datos
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };

        //guardo en la BD
        store.add(fullMessage);

        //el resolve de la promise al ser cierto el resultado.
        //retorna fullMessage
        resolve(fullMessage);
    });
    
}

function getMessages(filterUser) {
    return new Promise( (resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
            return false;
        };

        //este await esprea al async
        const result = await store.updateText(id, message);

        resolve(result);
    });
}

function deleteMessage(id) {
    return new Promise( (resolve, reject) => {
        if (!id) {
            reject('Invalid data');
            return false;
        };
        
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}

//Se detalla que funciones quiero exportar
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
};
