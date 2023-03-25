import { useEffect, useState } from "react"

export default function Home() {

  const [todos,setTodos]= useState<any[]>([]);
  const [todo,setTodo]= useState([]);

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

 </>

  )


  function newFunction(e:any) {
    //console.log("todo",e.target.value)
    return e.target.value;
  }
}
