const { describe } = require('yargs');

const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                default: 5,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: 10,
                describe: 'Rango de la tabla de multiplicar'
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false,
                describe: 'Muestra la tabla en la consolaf'
            })
            .check((argv, options)=>{
                if( isNaN(argv.b || argv.h) ){
                    throw 'La base o rango tiene que ser un numero'
                }
                return true
            })
            .argv;

module.exports = argv;