const { generateFile, listTable } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        generateFile(argv.base, argv.limite)
            .then(response => console.log(`Archivo: ${response.red}`))
            .catch(e => console.log(e))
        break

    case 'listar':
        listTable(argv.base, argv.limite)
            .then(response => console.log(response))
            .catch(e => console.log(e))
        break

    default:
        break
}

// console.log(process.argv);
// let argv2 = process.argv
// console.log(argv2);
// let parametro = argv[2]
// let base = parametro.split('=')[1]