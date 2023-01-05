import { reactive } from "vue"

export default function () {
    const post = reactive(null)
    const error = ref(null)

    const getDetailPost= async () =>{
    try{
        const response = await fetch("")
    }catch(err){

    }
}

getDetailPost();
}