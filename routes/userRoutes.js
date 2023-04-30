const router=require('express').Router()

  
router.post("/upload",(req,res)=>{

 console.log(req.body.url);
})



module.exports=router