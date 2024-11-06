//tourRoutes.js

const express = require('express');
const tourController = require('./../controller/toursController.js')
const router = express.Router();





//Routes

router.route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);
router.route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)

module.exports = router;