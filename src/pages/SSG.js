import connectDB from "../utils/connectDB";

function SSG() {
    return (<div>SSG</div>  );
}

export default SSG;
export async function getStaticProps(){

 try{
        await connectDB();

        const user = await User.find();
        return {
            props: { users : JSON.parse(JSON.stringify(users)) }
        };
    }
    catch(err){
       return {
       notFound: true,
       }
    }
}