const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime tabla de multiplicar', opts)
    .command('crear', 'genera archivo .txt con la tabla de multiplicar', opts)
    .help()
    .argv

module.exports = {
    argv
}