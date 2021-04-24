const express = require('express')
const router = express.Router();

router.post("/products",(req,res)=>{

    res.json({
        message:"Product was created"
    })
})



module.exports = router;