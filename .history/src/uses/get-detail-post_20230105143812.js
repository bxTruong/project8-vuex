import { reactive } from "vue"

export default function () {
    const post = reactive(null)
    const error = ref(null)

    try{
        const reponse = await fetch()
    }catch(err){

    }
}