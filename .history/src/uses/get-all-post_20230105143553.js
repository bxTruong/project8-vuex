export default function () {
    const posts = ref([]);
    const error = ref(null);

    const getAllPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            if(!response.ok) throw Error(response.status + " " + response.body)
            posts.value = 
        } catch (err) {
            error.value = err;
            console.log(error);
        }
    }
}