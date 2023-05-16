const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
app.use(cors());
app.use(express.json());

const PORT=1000;
//CONNECTING WITH MONGODB
mongoose.connect("mongodb+srv://projectone:projectone@cluster0.dzrb8.mongodb.net/train_project?retryWrites=true&w=majority")
        .then(()=>{
               console.log("connection establisehd")     
        })
        .catch(err=>{
            console.log(err)
        })

// const connection=mongoose.connection;
// connection.once('open',()=>{
//       console.log('MongoDB Connection Established');
// })
//IMPORTING ROUTES
const trainRoute=require('./routes/train');
app.use('/train',trainRoute);


app.listen(PORT,()=>{
      console.log('SERVER RUNNING ON ',PORT)});
