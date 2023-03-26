// import { todos } from "../../data/todos";
// export default function handler(req,res){
//     res.status(200).json(todos);
// }

//const mongoose=require("mongoose");
import mongoose from "mongoose";
import connectDB from "../../utils/connectDB";

export default async function handler(req,res){

   await connectDB();

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

    const user = await User.create({ name });
    console.log(user);

    res.status(201).json({status:"success", message:"Data Created",data:{name:name}});

   }

}