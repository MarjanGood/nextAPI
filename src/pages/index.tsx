import { useEffect, useState } from "react"

export default function Home() {

  const [todos,setTodos]= useState<any[]>([]);
  const [todo,setTodo]= useState([]);

  const [id,setId]= useState("");
  const [title,setTitle]= useState("");


  useEffect(()=>{
    async function fetchData(){
      const res= await fetch("/api/todos");
      const data = await res.json();
      console.log(data);
      setTodos(data);
    }
    fetchData();
  },[]);

  const clickHandler = async ()=>{

    const res = fetch("/api/todos",{
      method:"POST",
      body:JSON.stringify({todo}),
      headers:{"content-type":"application/json"}
    });

    const data = await(await res).json();
    console.log(data);
  }


  const DeleteHandler=async()=>{
    const res = await fetch("/api/todos",{
      method:"DELETE"
    });

    const data = await res.json();
    setTodos(data.data);
  }

  const ReplaceHandler= async ()=>{
  const res = await fetch("/api/todos",{
  method:"PUT"
  });
    const data = await res.json();
    setTodos(data.data);
  }

  const EditHandler= async()=>{

    const res = await fetch(`/api/todos/${id}`, {
      method:"PATCH",
      body:JSON.stringify(title),
      headers:{"content-type":"application/json"}
    });

    const data = await res.json();
    console.log("get from api" , title);
    console.log("get from api" , data);

    setTodos(data.data);

  }

  return (
 <>
  <h1>
  APi Routes HomePage
  </h1>

  <ul>
     {todos.map((t)=><li key={t.id}>{t.title}</li>)} 
  </ul>

  <input value={todo} onChange={ e=> setTodo(newFunction(e)) }></input>
  <button onClick={clickHandler}>Create new Todo</button>

<br />
<button onClick={DeleteHandler}>Delete All Todo</button>


<br />
<button onClick={ReplaceHandler}>Replace All Todo</button>

<br />
<input placeholder="Id" value={id} onChange={ e=>setId(e.target.value) }></input> 
<input placeholder="Title" value={title} onChange={ e=> setTitle(e.target.value) }></input> 
<button onClick={EditHandler}>Edit Todo</button>

 </>
  )


  function newFunction(e:any) {
    //console.log("todo",e.target.value)
    return e.target.value;
  }

}
