export default function (){
    const posts = ref ([]);
    const error = ref(null);

    const getAllPosts = async()=>{
        try{
const response = await fetch("")
        }catch(err){
            error.value = err;
            console.log(error);
        }
    }
}