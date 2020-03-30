/*
Gestiona el acceso a la base de datos. En este caso mongoDB.
*/

const Model = require('./model');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {
    //creo un objeto vacion denominado filter
    let filter = {};

    if (filterUser !== null) {
        //este es un where de mongoDB
        //creo el objeto con el filtro
        filter = { user: filterUser};
    }

    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id, message) {
    //busco el objeto (registro) a modificar en la BD
    const foundMessage = await Model.findOne({
        _id: id
    });

    //actualiza la propiedad con el nuevo mensaje
    foundMessage.message = message;

    //grabo y retorno el nuevo mensaje
    const newMessage = await foundMessage.save();
    return newMessage;
}

async function removeMessage(id, message) {
    //el filtro es como lo maneja mongoDB
    return Model.deleteOne({
        _id: id
    });
}


/*
Este módulo es un mock de almacenamiento
*/

//creo array
// const list = [];

// function addMessage(message) {
//     //agrega en el arrar el message
//     list.push(message);
// }

// function getMessages() {
//     return list;
// }


//hago publico las funciones con otros nombres para usar
module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage
    //get
    //delete
}


// uri: mongodb+srv://db_user:sistran2010@cluster0-skzzm.mongodb.net/test?retryWrites=true&w=majority
