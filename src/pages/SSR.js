import connectDB from "../utils/connectDB";

function SSR() {
    return (<div>SSR</div>  );
}

export default SSR;
export async function getServerSideProps(){

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