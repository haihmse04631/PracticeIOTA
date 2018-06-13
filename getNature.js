const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'http://localhost:14700' })

const remoteCurl = require('@iota/curl-remote')
remoteCurl(iota, `https://powbox.testnet.iota.org`, 500)

const hash = `NOTRCFCIUQYTZGQVILFJPMH9XXJYBFYSR9OBVCLXFFKWF9CJI9AGYYPVNUKBWRRRAOKXTNREQHIDDR999`
let count = 0
function findAccess(hash) {
    iota.api.getBundle(hash, function (error, bundles) {
        if (error) {
            console.log(`end`);
        } else {
            if(count == 2){
                getData(bundles)
            }else{
                nextBundle(bundles, findAccess)
                count++;
            }
        }
    })
}

function nextBundle(bundles , findAccess){
    let ownHash = bundles[0].hash
    let trunkTransaction = bundles[0].trunkTransaction
    console.log(ownHash)
    findAccess(trunkTransaction)
}

function getData(bundles){
    var message = bundles[0].signatureMessageFragment
    console.log(bundles[0].hash);
    formatMessage(message)
}

function formatMessage(input) {
    let count9 = 0;
    for(let i=0; i<input.length; i++){
         if(input[i] == '9' && input[i+1] == '9' && input[i+2] == '9'){
            var message = input.substring(0,i)
            console.log(iota.utils.fromTrytes(message));
            break
        }
    }
    return
 }

findAccess(hash)