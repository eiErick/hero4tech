const InserirPosts = document.getElementById('posts');

function exibirPosts(listaDePosts) {
    InserirPosts.innerHTML = '';
    listaDePosts.forEach(post => {
        console.log("teste")
        InserirPosts.innerHTML += `
        <a class="post_link" href="${post.link}" target="_self">
            <div class="post">
                <div>
                    <img class="post_img" src="${post.imagem}" alt="${post.alt}">
                </div>
                <div>
                    <h2 class="post_title">${post.titulo}</h2>
                </div>
            </div>
        </a>
        `;
    });
}