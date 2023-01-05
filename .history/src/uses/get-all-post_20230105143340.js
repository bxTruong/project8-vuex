export default function (){
    const posts = ref ([]);
    const error = ref(null);

    const getAllPosts = async()=>{
        try{

        }catch(err){
            error.value = err;
            console.log();
        }
    }
}