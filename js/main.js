let posts = [];
const endPointDaAPI = "https://eierick.github.io/hero4tech/posts.json";

getBuscarPostsDaAPI();
async function getBuscarPostsDaAPI() {
    const res = await fetch(endPointDaAPI);
    posts = await res.json();
    exibirPosts(posts)
    console.table(posts);
}