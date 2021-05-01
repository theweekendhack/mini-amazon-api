const productModel = require("../model/ProductModel.js");

exports.getProductListing =(req,res,next)=>{



    res.json({
        message : "A list of all the products in the database",
        data : productModel.getAllProducts(),
        total: productModel.getAllProducts().length
    })
    
    next();
   
};

//GET /users/948
exports.getSingleProduct = (req,res,)=>{

    const id = parseInt(req.params.id);
    console.log(id)

    const productFound = productModel.getAProduct(id)

    console.log(productFound)
    if(productFound != undefined)
    {
        res.json({
            message : `Details of product with the id ${productFound.id}}`,
            data:productFound
        })
    }

    else
    {
        res.status(404).json({
            message : `Product with id ${id} was not found`
        })
    }

};


exports.addAProduct=(req,res)=>{

    //NEVER TRUST THE DATA THAT COMES FROM A USER!!!! ()
    productModel.createAProduct(req.body);

    //sendGridAPI

    res.json({
        message: `The user was successfully created`,
        data : req.body
    })

};


exports.updateAProduct = (req,res)=>{


};


exports.deleteAProduct = (req,res)=>{


};