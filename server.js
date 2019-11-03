const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const path=require('path');
require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
//app.use(express.static(path.join(__dirname,'./myprofile/build')));

const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true });
const connection=mongoose.connection;
connection.once('open',()=>{console.log("MongoDB data connected")});

const CommentRouter=require('./CommentRouter');
app.use('/comment',CommentRouter);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('myprofile/build'));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'myprofile','build','index.html'));
    })
}



app.listen(port,()=>console.log(`Server is running on ${port}`));