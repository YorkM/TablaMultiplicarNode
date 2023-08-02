const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    console.log('');
    console.log('====================='.green);
    console.log('LA TABLA DEL'.yellow, base);
    console.log('====================='.green);
    console.log('');

    let  salida = '';
    let  consola = '';

    if (listar) {
        for (let i = 1; i <= hasta; i++) {
    
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green }  ${ base * i }\n`;
            
        }
        console.log( salida );
    }

    fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
    return (`tabla-${ base }.txt`);
}

module.exports = {
    crearArchivo
}