import { ref } from "vue"

export default function (id) {
    const post = ref(null)
    const error = ref(null)

    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            if (!response.ok) throw Error(response.status + " " + response.body)
            post = await response.json()
            console.log(post)
        } catch (err) {
            error.value = err
            console.log(error.value)
        }
    }

    fetchData();

    return { post, error, getDetailPost }
}