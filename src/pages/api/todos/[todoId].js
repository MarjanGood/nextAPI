import { todos } from "../../../data/todos";

export default function handler(req,res){

 //const  todoId =req.query.todoId;
  const {todoId} = req.query;
  const todo =todos.find(t=>t.id=== +todoId);
  console.log(todo);
  res.status(200).json(todo);
 
}

