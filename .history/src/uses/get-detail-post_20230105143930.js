import { reactive } from "vue"

export default function () {
    const post = reactive(null)
    const error = ref(null)

    const getDetailPost= async () =>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    }catch(err){

    }
}

getDetailPost();
}