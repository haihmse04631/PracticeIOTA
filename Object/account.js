var userName, passWord
var logUser
var logAllInfor
function Account(userName, passWord) {
    this.userName = userName
    this.passWord = passWord
}

function Setting() {
    this.logUser = function() {
        console.log(`Hello ${this.userName}`);
    }
    this.logAllInfor = function() {
        console.log(`Hello: ${this.userName} - Password: ${this.passWord}`);
    }
}


Account.prototype = new Setting()

module.exports = Account
