const URL=import.meta.env.VITE_API_URL;


export async function fetchUser(id) {
    return await fetch(URL+`${id}`)
    .then(res=>res.json());
}
