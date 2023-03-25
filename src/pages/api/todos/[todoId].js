import { todos } from "../../../data/todos";

export default function handler(req,res){

  if(req.method==="GET"){
 //const  todoId =req.query.todoId;
  const {todoId} = req.query;
  const todo =todos.find(t=>t.id=== +todoId);
  console.log(todo);
  res.status(200).json(todo);
 
}else if(req.method==="PATCH"){

    const {todoId}= req.query;
    console.log(todoId);
    
    const title= req.body;
    const index= todos.findIndex(t=> t.id === +todoId);
    const index2= todos.find(t=> t.id === +todoId);
    console.log("PATCH",index);
    console.log("PATCH",index2);

    todos[index]= {id: +todoId , title}

   // console.log(todos);

    res.status(200).json({
    message:"update done",
    data:todos
})
}

}