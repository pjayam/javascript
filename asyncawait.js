const posts = [{
    title: 'post 1',
    body: 'post 1 body'
},
{
    title: 'post 2',
    body: 'post 2 body'
}
]

function getPosts() {
setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
        output += `<li>${post.title}   ----    ${post.body}</li>`
    })
    document.body.innerHTML = output;
}, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve()
            } else {
                reject('Error occurred')
            }
        }, 2000)
    });
}

//Async /await
async function init() {
    await createPost({
        title: 'post 3',
        body: 'post 3 body'
    })

    getPosts();
}

// init();

//Async / await with fetch
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = res.json();
    console.log(data);
}

fetchUsers();













