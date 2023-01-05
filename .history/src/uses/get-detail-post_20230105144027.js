import { reactive } from "vue"

export default function () {
    const post = reactive(null)
    const error = ref(null)

    const getDetailPost = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
            if (!response.ok) throw Error(response.status + " " + response.body)
            post = await response.json()
        } catch (err) {
            error.value = err
            console.log(error.value)
        }
    }

    getDetailPost();

    return { post, error, getDetailPost }
}