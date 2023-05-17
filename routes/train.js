const router=require('express').Router();

//IMPORTING TRAIN MODEL
const Train=require('../models/train.model');
//GET METHOD
router.route('/').get((req,res)=>{
    Train.find()
      .then((response)=>res.json(response))
      .catch(err=>res.status(400).json('ERROR:'+err));
})
//POST METHOD
router.route('/add').post((req,res)=>{
      const trainNo=req.body.trainNumber;
      const trainN=req.body.trainName;
      const from=req.body.from;
      const to=req.body.to;
      const tdate=req.body.date;
      const time=req.body.time;
      const fcs=req.body.firstClassSeats;
      const fcp=req.body.firstClassPrice;
      const scs=req.body.secondClassSeats;
      const scp=req.body.secondClassPrice;

    const newTrain=new Train(
          {
                trainNumber:trainNo,
                trainName:trainN,
                from:from,
                to:to,
                date:tdate,
                time:time,
                firstClassSeats:fcs,
                firstClassPrice:fcp,
                secondClassSeats:scs,
                secondClassPrice:scp
          }
    );
    //SAVING INTO DATABASE
    newTrain.save()
            .then(()=>res.json('NEW TRAIN SCHEDULE ADDED'))
            .catch(err=>res.status(400).json('ERROR:'+err));
});
//UPDATING VIA ADMIN
router.route('/update/admin/:id').post((req,res)=>{
        Train.findById(req.params.id)
             .then((response)=>{
                   response.date=req.body.date;
                   response.time=req.body.time;

            response.save()
                    .then(()=>res.json('UPDATED VIA ADMIN'))
             })
})
//UPDATING WHEN USER BUYS A SEAT
router.route('/update/:id').post((req,res)=>{
            Train.findById(req.params.id)
                  .then((response)=>{
                        response.firstClassSeats=req.body.firstClassSeats;
                        response.secondClassSeats=req.body.secondClassSeats;
                        
                    response.save()
                     .then(()=>res.json('UPDATED VIA USER'));
                  })
            
})
//DELETE
router.route('/delete/:id').delete((req,res)=>{
        Train.findByIdAndDelete(req.params.id)
             .then(()=>res.json('DELETED SUCCESSFULLY'));
})

//EXPORTING ROUTER
module.exports=router;