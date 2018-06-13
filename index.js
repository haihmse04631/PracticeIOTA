const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'http://localhost:14700' })

const remoteCurl = require('@iota/curl-remote')
remoteCurl(iota, `https://powbox.testnet.iota.org`, 500)

// iota.api.getNodeInfo((error, success) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(success);

//     } 
// })


const trytes =
    'VERTAWNTFULJCUNRZXPVBHQKBTSOOPPPNRBQ9AUYDRDFPVIJBIOBLNLNS9GGVUHXIJCHTCVOQQGVRY9IH'

const message = iota.utils.toTrytes('Rau Muong - Trang Trai: ABC - fucking: Sach ')

const transfers = [
    {
        value: 0,
        address: trytes,
        message: message
    },


]

const hashs = ['MUXIPLJEIQHKKTDPSYFQNJJKX9JTSIDHPPSARTNE9PJYGOJLMY9HXLRXVFT9FQGXBPQOWIBZWROWMS999']
const hash3 = `NOTRCFCIUQYTZGQVILFJPMH9XXJYBFYSR9OBVCLXFFKWF9CJI9AGYYPVNUKBWRRRAOKXTNREQHIDDR999`
const hash2 = `DGOHVGBUTFOLK9SMFHOOGZHGNGJMKBCMDUMZ9BETNVZEURKNHFHZNWKEMOYANMGCZBBWCGHORCBHGN999`
const searchHash = {
    hash: [`SZGDYBCEOXVNT`]
}


// iota.api.sendTransfer(trytes, 3, 9, transfers, (error, success) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(success)
//     }
// })

// const seed =
//     'VHKHZANQOPOY9AKWOVHPSHSISLGCMWPCSQ9ATJT9VFCPOTQRDU9KKGPV9SIDWRPJNGVNNWWWMNE9XPBIX'
// function getAccountData(seed){
//     iota.api.getAccountData(trytes, function(error, data){
//         if(error){
//             console.log(error);
//         }else{
//             console.log(data);
//         }
//     })
// }

// getAccountData(trytes)

// iota.api.findTransactions(searchHash, function(error, data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(`Done`);
//         console.log(data);
//     }
// })

// function decodeTrytes(code){
//     console.log(iota.utils.fromTrytes(code));
// }

// decodeTrytes(code)

// function findAccess(hash) {
//     iota.api.getBundle(hash, function (error, bundles) {
//         if (error) {
//             console.log(`end`);
//         } else {
//             let ownHash = bundles[0].hash
//             let trunkTransaction = bundles[0].trunkTransaction
//             console.log(ownHash)
//             findAccess(trunkTransaction)
//         }
//     })
// }

// findAccess(hash3)
// function findOneAccess(hash) {
//     iota.api.getBundle(hash, function (error, bundles) {
//         if (error) {
//             console.log(`end`);
//         } else {
//             let ownHash = bundles[0].hash
//             let trunkTransaction = bundles[0].trunkTransaction
//             console.log(bundles)
//         }
//     })
// }

// findOneAccess(hash2)


// findOneAccess(`RLOQHXYQXVUQKGKDWGT9ERAQEEWXDPHJNHUIAZCRGGAETYMRWKVVLT9ZMFJPRZXYZVQSVXATXSEERQ999`)

// iota.api.getTransactionsObjects(hashs, function(error, transactions){
//     if(error){
//         console.log(error);
//     }else{
//         transactions.forEach(element => {
//             console.log(element.trunkTransaction);
//         });
//     }
// })


// iota.api.getTransactionsObjects(hashs, function(error, transactions){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(transactions);

//     }
// })

function getAccountData(seed){
    iota.api.getAccountData(seed, function(error, success){
        if(error){
            console.log(error);
        }else{
            console.log(success);
        }
    })
}









