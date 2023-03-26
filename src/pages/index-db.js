import { useState } from "react";

export default function Home(){

    const [name , setName]=useState("");

    const postHandler = async () =>{

        const res = await fetch("/api", {
          method: "POST",
          body: JSON.stringify({name}),
          headers:{"Content-Type":"application/json"},
        });

        const data = await res.json();
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
        </div>
    )
}