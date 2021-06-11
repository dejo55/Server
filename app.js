const express = require("express");
const bodyParser = require("body-parser");
const app = express();



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dejo:NTM1234loveme5//1*2.2@cluster0.8yynq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
if (err) return console.log(err);
console.log('connected to mongo database');
const db = client.db("dejo");
const quotesCollection = db.collection("quotes");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
quotesCollection.insertOne(req.body).then((result)=> console.error(error));
});

app.listen(3000, function(){
    console.log("listen on 3000");
});
});


