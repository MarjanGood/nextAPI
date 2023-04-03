import { useState,useEffect } from "react";

export default function Home(){

    const [name , setName]= useState("");
    const [users , setUsers]= useState([]);

    const [edit , setEdit]= useState("");
    const [email , setEmail]= useState("");

    useEffect(()=>{
        fetch("/api").then(res=>res.json()).then(data=>setUsers(data.data))
    },[]);

    const postHandler = async () =>{

        const res = await fetch("/api", {
          method: "POST",
          body: JSON.stringify({name}),
          headers:{"Content-Type":"application/json"},
        });

        const data = await res.json();
        console.log(data);

    }


    const detailsHandler=(id)=>{
        fetch(`/api/${id}`)
        .then((res) => res.json())
        .then((data) => console.log(data.data));
    }

    const editHandler = (user) =>{

        setEdit(user._id);
        setEmail(user.email);
    }

    const saveHandler = async(id) =>{
        const res = await fetch(`/api/${id}`,{
            method:"PATCH",
            body:JSON.stringify({email}),
            headers:{"Content-Type":"application/json"}
        })

        const data = await res.json();
        setEdit("");
        console.log(data);
    }

    return(
        <div>
            <h1>
              connecting DataBase to Next.js Project!  
            </h1>

            <div>
                <input placeholder="Enter Name" value={name} onChange={e=> setName(e.target.value)} />
                <button onClick={postHandler}>Post</button>
            </div>

            <div>
                <ul>
                    {users.map(u=><li key={u.id} onClick={()=>detailsHandler(user._id)}>{u.name}</li>)}
                </ul>
                <button onClick={()=>editHandler(user)}>Edit</button>
          {
           edit && edit===user._id ? (
           <div>
           <input value={email} onChange={e=> setEmail(e.target.value)}></input>
           <button onClick={()=>saveHandler(user._id)}></button>
           </div>
           ) : null
          }
            </div>
        </div>
    )
}