import { todos } from "../data/todos";

function Todos({data}) {
    return (
         <div>
        {
        data.map(t=>(<h1 key={t.id}>{t.title}</h1>))
        }
    </div> 
    );
}

export default Todos;

export async function getStaticProps(){

    //ghalate absolute rout mikhad
    // const res = await fetch("/api/todos");
    // const data= await res.json();
console.log(todos);

    return {
        props: { data: todos },
    }
}