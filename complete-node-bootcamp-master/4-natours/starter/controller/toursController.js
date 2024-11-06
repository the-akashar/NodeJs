
//tourController.js

const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`D:/workspace/NodeJs/complete-node-bootcamp-master/4-natours/starter/dev-data/data/tours-simple.json`)
);

//Tours

//Challenge
 //Create a checkBody middleware
 //Check if body contains name and price
 //If not senf 400 error
 //Add it to the post handler stack


 exports.checkBody = (req,res,next) => {
    console.log(req.body)
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status:'fail',
            message:'Missing name or Price'
        })
    }
    next();
}

exports.checkID = (req,res,next,val)=>{
    console.log(`Tour id is:${val}`)
    if(req.params.id * 1>tours.length){
        return res.status(400).json({
            status:'fail',
            message:'Invalid ID'
        })
    }
    next();
}




exports.getAllTours = (req,res)=>{
    res.status(200).json({
        status:'success',
        requestedAt:req.requestTime,
        results:tours.length,
        data:{
            tours
        }
    })
}

exports.getTour = (req,res)=>{
    console.log(req.params)
    id = req.params.id*1;
    const tour = tours.find(el=>el.id === id);
    if(!tour){
        return res.status(404).json({
            status:'Failed',
            "message":'Invalid Id'
        });
    }
    res.status(200).json({
        status:'success',
        data:{
            tour
        }
    })
}

exports.createTour = (req,res)=>{
    const newId = tours[tours.length-1].id+1;
    const newTour = Object.assign({id:newId},req.body);

    tours.push(newTour);
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        err=>{
            res.status(201).json({
                status:'success',
                data:{
                    tour:newTour
                }
            })
        }
    )

}

exports.updateTour = (req,res)=>{
    
    res.status(200).json({
    status:'Success',
    tour:"Upadated tour here"
    
})
}

exports.deleteTour = (req,res)=>{
    
    res.status(204).json({
    status:'Success',
    data:null
    
})
}