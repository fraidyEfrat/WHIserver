const verifyJWT_admin = (req,res,next)=>{
    console.log("reqreqreq",req);
    console.log("reqreqreq1",req.user);
    console.log("reqreqreq2",req.user.role);
    
    if(req.user.role =="ADMIN"){
        next()
       
    }else{
        res.status(401).send("Forbidden, not admin")
    }
   
}

module.exports = verifyJWT_admin