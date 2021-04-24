const express = require('express')
const router = express.Router();

router.post("/",(req,res)=>{

    res.json({
        message : "This is the post request for /auth"
    })

})


router.get("/",(req,res)=>{

    res.json({
        message : "This is the GET request for /auth"
    })

})



module.exports = router;