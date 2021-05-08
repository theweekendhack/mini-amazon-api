const productModel = require("../model/ProductModel.js");


exports.getProductListing =(req,res,next)=>{
  
    productModel.find()
    .sort({title:-1})
    .then((products)=>{

        res.json({
            message : "A list of all the products in the database",
            data : products,
            total: products.length 
        })


    })
    .catch(err=>{

        res.status(500).json({
            message : `Error ${err}`,
        }) 

    })
   
};



exports.addAProduct=(req,res)=>{



    const data = req.body


    const newProduct = new productModel(data);

    newProduct.save() //this will trigger a promise

    .then((product)=>{
       
        res.json({
            message: `The product was successfully created`,
            data : product
        })
    })
   .catch(err=>{

        res.status(500).json({
            message : `Error ${err}`,
        })  
    }) 

 

};

//GET /users/948
exports.getSingleProduct = (req,res,)=>{

  

};





exports.updateAProduct = (req,res)=>{


};


exports.deleteAProduct = (req,res)=>{


};