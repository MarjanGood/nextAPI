import { useEffect, useState } from "react"

export default function Home() {

  const [todos,setTodos]= useState<any[]>([]);

  useEffect(()=>{
    async function fetchData(){
      const res= await fetch("/api/todos");
      const data = await res.json();
      console.log(data);
      setTodos(data);
    }
    fetchData();
  },[])

  return (
<>
  <h1>
  APi Routes HomePage
  </h1>
  <ul>
     {todos.map((t)=><li key={t.id}> 5365 {t.title}</li>)} 
  </ul>
</>

  )

}
