import { reactive } from "vue"

export default function (id) {
    const post = reactive(null)
    const error = ref(null)

    const fet = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
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