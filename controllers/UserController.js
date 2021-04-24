
const express = require('express')
const router = express.Router();

const userModel = require("../model/UserModel.js");


//ROUTES (END POINTS FOR OUR API)

//routes (ROUTE 1) 
//GET ALL USERS


router.get("/",(req,res)=>{

    res.json({
        message : "A list of all the users in the database",
        data : userModel.getAllUsers(),
        total: userModel.getAllUsers().length 
    })

})

//ROUTE #2
//GET A SPECIFIC USER

router.get("/:id",(req,res)=>{

    const id = parseInt(req.params.id);
    console.log(id)

    const userFound = userModel.getAUser(id)

    console.log(userFound)
    if(userFound != undefined)
    {
        res.json({
            message : `Details of product with the id ${userFound.id}}`,
            data:userFound
        })
    }

    else
    {
        res.status(404).json({
            message : `Product with id ${id} was not found`
        })
    }

})

//ROUTE 3 
//CREATE A USER
router.post("/",(req,res)=>{

    userModel.createAUser(req.body);

    res.json({
        message: `The user was successfully created`,
        data : req.body
    })

})


module.exports=router;


