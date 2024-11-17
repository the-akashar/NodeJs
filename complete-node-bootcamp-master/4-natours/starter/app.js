const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const morgan = require('morgan');



const tourRouter = require('./public/routes/tourRoutes');
const userRouter = require('./public/routes/userRoutes');

//Middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));//Serving static files from a folder .....


    app.use((req,res,next)=>{
        console.log('Hello from middle ware');
        next();
    })

app.use((req,res,next)=>{
    console.log('Hello from middle ware');
    req.requestTime = new Date().toDateString();
    next();
})







//Refractoring






// //Get Method

// app.get('/api/v1/tours',getAllTours);


// //Post Method

// app.post('/api/v1/tours',createTour)

// //Read Method

// app.get('/api/v1/tours/:id',getTour)

// //Path or Post

// app.patch('/api/v1/tours/:id',updateTour);

// //Delete

// app.delete('/api/v1/tours/:id',deleteTour);

//Routes
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);

module.exports = app;

