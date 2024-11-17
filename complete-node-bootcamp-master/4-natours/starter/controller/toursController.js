
//tourController.js

// const fs = require('fs');

// const tours = JSON.parse(
//     fs.readFileSync(`D:/workspace/NodeJs/complete-node-bootcamp-master/4-natours/starter/dev-data/data/tours-simple.json`)
// );

//Tours

//Challenge
 //Create a checkBody middleware
 //Check if body contains name and price
 //If not senf 400 error
 //Add it to the post handler stack


//  exports.checkBody = (req,res,next) => {
//     console.log(req.body)
//     if(!req.body.name || !req.body.price){
//         return res.status(400).json({
//             status:'fail',
//             message:'Missing name or Price'
//         })
//     }
//     next();
// }

// exports.checkID = (req,res,next,val)=>{
//     console.log(`Tour id is:${val}`)
//     if(req.params.id * 1>tours.length){
//         return res.status(400).json({
//             status:'fail',
//             message:'Invalid ID'
//         })
//     }
//     next();
// }

const Tour = require('./../models/tourModel')




exports.getAllTours = async (req,res)=>{

    try{
        const tours = await Tour.find();

        res.status(200).json({
            status:'success',
            requestedAt:req.requestTime,
            results:tours.length,
            data:{
                tours
            }
        });

    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }

    
}

exports.getTour = async     (req,res)=>{
    try{
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
        status:'success',
        data:{
            tour
        }
    })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
    
}

exports.createTour = async (req,res)=>{
    

    try{
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status:'success',
            data:{
                tour:newTour
            }
        })
    }catch (err){
        res.status(400).json({
            status:'fail',
            message:'Invalid data set   '
        })
    }
    

}

exports.updateTour = async (req,res)=>{

    try{
        const tour = await Tour.findByIdAndUpdate(req.params.id , req.body , {
            new:true,
            runValidators:true
        })

        res.status(200).json({
            status:'Success',
            tour:"Upadated tour here"
            
        });

    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
            
        });
    }
    
    
}

exports.deleteTour = async (req,res)=>{

    try{
         await Tour.findByIdAndDelete(req.params.id )

        res.status(200).json({
            status:'Success',
            data:null
            
        });

    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
            
        });
    }
    
}