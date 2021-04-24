const express = require("express");


const productController  = require("./controllers/ProductController.js");
const userController  = require("./controllers/UserController.js");
const authController  = require("./controllers/AuthController.js");


const app = express();

//TELLS EXPRESS HOW TO PARSE() INCOMMING JSON DATA!!~!!
app.use(express.json());


//GET localhost:3000/users/
app.use("/users",userController);
app.use("/auth",authController);
app.use("/products",productController);


//RETURN 404  (Not Found )
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Web Server is up and running on PORT ${PORT}`);
})




