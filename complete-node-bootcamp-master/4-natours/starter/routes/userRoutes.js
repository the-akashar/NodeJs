const express = require('express');
const userController = require('./../controller/usersController')
const router = express.Router();



//Routes


router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUsers);
router.route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUsers)
    .delete(userController.deleteUsers)

module.exports = router;