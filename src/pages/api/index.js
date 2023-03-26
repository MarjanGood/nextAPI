// import { todos } from "../../data/todos";
// export default function handler(req,res){
//     res.status(200).json(todos);
// }

//const mongoose=require("mongoose");
import mongoose from "mongoose";
import connectDB from "../../utils/connectDB";

export default async function handler(req,res){

    try{
        await connectDB();
    }catch(e){
      console.log(e);
      res.status(500).json({status:"failed",message:"Error in connecting to database"})
    }

   if(req.method=== "POST"){

    const name = req.body.name;
    console.log(name);

    // check validations
    if(!name || name.length <= 3){
        res.status(422).json({status:"failed" , message:"Invalid Data"});
        return;
    }

    // const user = new User({name});
    // await user.save();

    try{
       // const user = await User.create({ name });
        const user = await User.create({ 
            name: "baran",
            age:250,
            email:"baran@ifb.ir",
            phone:"0912",
            address:{
                city:"Esfahan",
                street:"Emam"
            },
            courses:["next","core","react"]
         });
        console.log(user);
    }catch(e){

        console.log(e);
        res.status(500).json({status:"failed",message:"Error in storing data in database"})
    }


    res.status(201).json({status:"success", message:"Data Created",data:{name:name}});

   }

}