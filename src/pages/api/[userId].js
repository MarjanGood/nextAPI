import connectDB from "../../utils/connectDB";

export default async function handler(req, res){

    //connect to db
    try{
        await connectDB();
    }catch(e){
      console.log(e);
      res.status(500).json({status:"failed",message:"Error in connecting to database"});
      return;
    }

    const id = req.query.userId;

    if(req.method==="GET"){

        try{
              const userData = await User.findById(id);
           // const userData =await User.find(); //get all user data.
           // const userData = await User.find({name:"Milad"}); //get all user that has milad name, it might be several record.
           // const userData = await User.findOne({name:"Milad"}); //get first user that has milad name.

             res.status(200).json({status:"success" , data:"yes"});
          }catch(err){
            console.log(err);
            res.status(500).json({status:"failed" , message:err});


          }
    }
    else if(req.method==="PATCH"){
        try{
     const userData = await User.findById(id);
     userData.email=req.body.email;
     await userData.save();
     res.status(200).json({status:"success" , data:userData})
    } catch(e){

    res.status(500).json({
    status:"failed",
    message:"Error in updating in database"
    });

    }

    }
    else if(req.method==="Delete"){
     try{
      await User.findOneAndDelete({_id:id});

     res.status(200).json({status:"success" , message:"data deleted"})
    } catch(e){

    res.status(500).json({
    status:"failed",
    message:"Error in deleting in database"
    });

    console.log(err)

    }
    
    }

}
 