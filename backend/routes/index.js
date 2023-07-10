const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


// import controllers 
const authController = require("../controller/auth");
const blogController = require("../controller/blog");


// user routes
router.post('/register', authController.register)      // register
router.post('/login', authController.login)            // login
router.post('/logout', auth, authController.logout)    // logout
router.get('/refresh', authController.refresh)         // refresh


// blog routes
router.post('/blog', auth, blogController.create)      // create 
router.put('/blog', auth, blogController.update)       // Edit
router.get('/blog', auth, blogController.getAll)       // Get All
router.get('/blog/:id', auth, blogController.getById)  // Get By Id
router.delete('/blog:id', auth, blogController.delete) // Delete  


module.exports = router;