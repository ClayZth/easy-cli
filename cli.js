#! /usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')
program
    .command('create <name>')
    .description('create a new project')
    .option('-f,--force','overwrite target directory if it exist')
    .action((name,options)=>{
        require('./lib/create.js')(name,options)
    })

program
    .command('config [value]')
    .description('inspect and modify the config')
    .option('-g,--get <path>','get value from option')
    .option('-s,--set <path> <value>')
    .option('-d,--delete <path>','delete option from config')
    .action((value,options)=>{
        console.log(value,options);
    })

program
    .command('ui')
    .description('start add open clay-vue-cli ui')
    .option('-p,--port <port>','Port used for the UI Server')
    .action((option)=>{
        console.log(option);
    })

program
    .on('--help',()=>{
        console.log('\r\n' + figlet.textSync('zthClay',{
            font:'Ghost',
            horizontalLayout:'default',
            verticalLayout:'default',
            width:100,
            whitespaceBreak:true
        }));
        console.log(`\r\nRun ${chalk.cyan(`clay-vue-cli <command> --help`)} for detailed usage of given command\r\n`);
    })

program
    .version(`v${require('./package.json').version}`)
    .usage('<command> [option]')

program.parse(process.argv)