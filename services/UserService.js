

const userModel = require("../model/UserModel.js");


exports.getUserListing =(req,res)=>{



    res.json({
        message : "A list of all the users in the database",
        data : userModel.getAllUsers(),
        total: userModel.getAllUsers().length 
    })
};


//GET /users/948
exports.getSingleUser = (req,res)=>{

    //x, y, z
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

};


exports.addAUser=(req,res)=>{

   
     const postedData = req.body;

    userModel.createAUser(postedData);

    res.json({
        message: `The user was successfully created`,
        data : req.body
    })

};



exports.updateAUser = (req,res)=>{


};


exports.deleteAUser = (req,res)=>{


};


