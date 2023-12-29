const AuthorizeUser=(req,res,next)=>{
const {user}=req.body;
if(user){
    next();
}
else{
    res.status(404).json({message:"required user"})
}
}

module.exports=AuthorizeUser