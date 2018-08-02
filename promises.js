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

getPosts();

// createPost({
//         title: 'post 3',
//         body: 'post 3 body'
//     }).then(getPosts)
//     .catch(err => console.log('Some Error occurred'));

//PROMISE.ALL Example

const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'Good Bye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

Promise.all([promise1,promise2,promise3,promise4]).then((values) => console.log(values));






