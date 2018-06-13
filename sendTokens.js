const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'http://localhost:14700' })

const remoteCurl = require('@iota/curl-remote')
remoteCurl(iota, `https://powbox.testnet.iota.org`, 500)

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var temp = ''
var response = rl.question('enter message: ', getMessage)

function getMessage(response){
    console.log(response);
}

var response2 = rl.question('Ahihi: ', getMessage2)
function getMessage2(response2){
    console.log(response2);
    rl.pause()
}
