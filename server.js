const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');



const productController  = require("./controllers/ProductController.js");
const userController  = require("./controllers/UserController.js");
const authController  = require("./controllers/AuthController.js");

const app = express();

app.use(express.json());

app.use(cors({
    origin :"http://127.0.0.1:5500"
}));

//GET localhost:3000/users/
app.use("/users",userController);
app.use("/auth",authController);
app.use("/products",productController);


//RETURN 404  (Not Found )
const PORT = 3000;
app.listen(PORT,()=>{

    console.log(`Web Server is up and running on PORT ${PORT}`);

    mongoose.connect(`mongodb+srv://kadeemBest:kadeemBest2021@cluster0.8rw9s.mongodb.net/mini-amazon?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log(`API is connected to the MongoDB database`)
    })
    .catch(err=>console.log(`Error ${err}`));
 
})




