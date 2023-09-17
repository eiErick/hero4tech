let posts = [];
const endPointDaAPI = "../posts.json";

getBuscarPostsDaAPI();
async function getBuscarPostsDaAPI() {
    const res = await fetch(endPointDaAPI);
    posts = await res.json();
    exibirPosts(posts)
    console.table(posts);
}