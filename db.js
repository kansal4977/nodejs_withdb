const mongoose=require('mongoose');
//Define  mongodb url connection
//const mongoURL= 'mongodb://localhost:27017/mydb';
const mongoURL= 'mongodb+srv://kansal:param%402005@cluster0.tzuy2.mongodb.net/';
//setup monogdb connection
mongoose.connect(mongoURL);
//get the default connection
const db=mongoose.connection;

//define event listers to database connection
db.on('connected', ()=> {
    console.log("Connected");
});
db.on('error', ()=> {
    console.log("Error");
});
db.on('disconnected', ()=> {
    console.log("Dis-Connected");
});

//export the database connection
module.exports =db;