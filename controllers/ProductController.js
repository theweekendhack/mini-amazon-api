const express = require('express')
const router = express.Router();


const productService = require("../services/ProductService.js");




router.get("/",productService.getProductListing);

router.get("/:id",productService.getSingleProduct);

router.post("/", productService.addAProduct);

router.put("/:id",productService.updateAProduct);

router.delete("/:id",productService.deleteAProduct);

module.exports=router;