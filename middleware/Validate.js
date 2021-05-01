exports.validateUserForm = (req,res,next)=>{

    console.log(req.body);


    const errors = [];

    if(req.body.firstName=="")
    {
        errors.push("You must enter a firstName")
    }

    if(req.body.lastName=="")
    {
        errors.push("You must enter a lastname")
    }

    if(req.body.email=="")
    {
        errors.push("You must enter an email")
    }

    if(errors.length == 0)
    {
        next();
    }
    else
    {
        res.status(400).json({
            message: "You got issues",
            errors
        })
    }
    
   
}

exports.validateProductForm=(req,res,next)=>
{

}