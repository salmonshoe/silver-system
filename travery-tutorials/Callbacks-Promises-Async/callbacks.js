const posts = [
    { title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    //setTimeout takes in a callback function and delays by a certain amount of time
    setTimeout(function() {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

//getPosts(); would actually document the posts it loops through but cuts off any others since the createPost occurs after this function ends

createPost({title: 'Post Three', body: 'This is post three'}, getPosts)