const express=require("express");
const cors=require("cors");
app=express();
app.use(express.json());

const mclient=require('mongodb').MongoClient;

app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST','PUT','PATCH','DELETE'],
        credentials: true
    })
);

mclient.connect('mongodb+srv://abhiram:6309422@cluster0.zgy92ci.mongodb.net/?retryWrites=true&w=majority')
    .then((dbRef)=>{
        console.log('DB connection success')
    })
    .catch(err=>console.log("databases connect error:",err));