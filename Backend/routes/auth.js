const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'Harryis agood$boy';

//Create a user using : Post"/api/auth/createuser"
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there are errors,return bad requestand the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Sorry a user with this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);

      //Create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
      });
      const data = {
        user:{
          id: user.id
        }
      }

     const authtoken = jwt.sign(data,JWT_SECRET);

      res.json({authtoken});


    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

//Authenticate a user using : POST "/api/auth/login" . login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    //if there are errors,return bad requestand the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const{email, password} = req.body;
    try{
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error: "Please try to login with correct credentials"});
      }
      

     const  passwordCompare = bcrypt.compare(password, user.password);
     if(!passwordCompare){
      return res.status(400).json({error: "Please try to login with correct credentials"});
    }

    const data = {
      user:{
        id: user.id
      }
    }

   const authtoken = jwt.sign(data,JWT_SECRET);

    res.json({authtoken});
     

    }catch(error){
      console.error(error.message);
      res.status(500).send("Internal Error occured");
    }

  }) 
  //Route 3: get logged in user details using: Post "/api/auth/getuser"
  router.post( '/getuser', fetchuser, async (req, res) => {
  try { 
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Error occured");
  }})
module.exports = router;