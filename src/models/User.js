import {schema , model, models} from "mongoose"

const userSchema = new Schema({
    name: String,
    phone:String,
    age:{
        type:Number,
        min:10,
        max:50
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        city:String,
        street:String,
        alley:String
    },
    courses:[String],
    createAt:{
        type: Date,
        default:()=>Date.now(),
    }
})

const User = models.User || model("User", userSchema);

export default User;