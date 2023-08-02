const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(response => {
        console.log( response.green, 'Creado'.green );
    })
    .catch(err => {
        let message = {
            message: 'Algo falló en la promesa, revisar por favor'
        }
         console.log( message );
    })