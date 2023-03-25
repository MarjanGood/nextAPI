import { todos } from "../../../data/todos";

export default function handler(req,res){

    if(req.method==="GET"){
    res.status(200).json(todos);
    }else if(req.method==="POST"){
     const {todo} = req.body;
     //store in a DB
     const newTodo={
        id:todos.length+1,
        title:todo
     }

     res.status(201).json({
        message: "success",
        data: newTodo
     })
    }else if(req.method==="DELETE"){
     res.status(200).json({message:"alltodos deleted" , data:[]})

    }else if(req.method==="PUT"){
        res.status(200).json({
        message:"alltodos deleted",
        data:[{id:8, title:"todo 8"},{id:9, title:"todo 9"}]
        })
    } 
        }
