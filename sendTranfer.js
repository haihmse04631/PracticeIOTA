const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'http://localhost:14700' })
const readline = require('readline')
const remoteCurl = require('@iota/curl-remote')
remoteCurl(iota, `https://powbox.testnet.iota.org`, 500)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var response = rl.question('enter message: ', getMessage)
const tryte ='VHKHZANQOPOF9AKWOVHPSHSSSEGEAWPFSS9AWFTQEFCSOTQRDU9KKGPV9SIDWRPJNGVNNWWWMNE9XPBIX'
function getMessage(response){
    var message = iota.utils.toTrytes(response)
    var transfers = [
        {
            value: 0,
            address: tryte,
            message: message
        },
    ]

    iota.api.sendTransfer(tryte, 3, 9,transfers, (error, success) => {
        if(error){
            console.log(error);
        }else{
            console.log(success);
        }
    })
    return
}





