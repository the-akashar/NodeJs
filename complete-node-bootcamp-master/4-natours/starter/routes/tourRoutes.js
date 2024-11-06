//tourRoutes.js

const express = require('express');
const tourController = require('./../controller/toursController.js')
const router = express.Router();

router.param('id',tourController.checkID); //Param midleware

//Routes


//Challenge
 //Create a checkBody middleware
 //Check if body contains name and price
 //If not senf 400 error
 //Add it to the post handler stack

router.route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody , tourController.createTour);
router.route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)

module.exports = router;