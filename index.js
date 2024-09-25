const express = require('express');
const path=require("path");
const app = express();
const db=require("./db");
const bodyParser=require('body-parser');
const Student=require('./schema/student');
require('dotenv').config();

app.use(bodyParser.json());

const port = process.env.PORT;


app.get('/', (req, res) => {
    //res.send('Vikas!')
    res.sendFile(path.join(__dirname,'index.html'))
    //res.json({"Vikas": 47})
  })

app.get('/me', (req, res) => {
    res.send('Hello World from Vikas!')
  })
//saving data into the database
app.post('/stu', async (req,res) => {
  try{
    const data=req.body;
    const newStu=new Student(data);
    const result=await newStu.save();
    console.log('Student data saved');
    res.status(200).json(result);
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({error:'internal error'});
  }
});
//reading data from database
app.get('/stu', async (req, res) => {
  try{
    const data=await Student.find();
    console.log("Data fetched");
    res.status(200).json(data);
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({error:'internal error'});
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
