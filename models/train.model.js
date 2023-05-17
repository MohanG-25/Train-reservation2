const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const newSchema=new Schema(
      {
            trainNumber:{type:Number,unique:true},
            trainName:{type:String},
            from:{type:String},
            to:{type:String},
            date:{type:Date},
            time:{type:Number},
            firstClassSeats:{type:Number},
            firstClassPrice:{type:Number},
            secondClassSeats:{type:Number},
            secondClassPrice:{type:Number}
      },
      {
            timestamps:true
      }
);

const Train=mongoose.model('Train',newSchema,'train');

//EXPORTING TRAIN MODEL
module.exports=Train;