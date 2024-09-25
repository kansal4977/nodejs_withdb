var fs=require('fs')
var os=require('os')

var user=os.userInfo;
console.log(user);
console.log(user.username);
fs.appendFile("user.txt", 'Hi'+ user.username, ()=> {
    console.log("User Infomration written succssfully")
});