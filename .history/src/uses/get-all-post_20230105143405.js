export default function (){
    const posts = ref ([]);
    const error = ref(null);

    const getAllPosts = async()=>{
        try{
const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        }catch(err){
            error.value = err;
            console.log(error);
        }
    }
}