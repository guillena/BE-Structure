/*
Todas las respuestas estaran en este archivo.
El contenido de las respuestas la dará cada component, este solo controla la
salida hacia el consumer para tener un solo punto de salida.
*/

//la funcionaes ya tiene el exports para ser usadas

exports.sucess = function (req, res, message, status) {
    //si status viene vacio envia 200
    res.status(status || 200).send({
        error: '',
        body: message,
    });
}

exports.error = function (req, res, message, status, details) {
    console.error('[response error] ' + details);

    res.status(status || 500).send({
        error: message,
        body: '',
    });
}

