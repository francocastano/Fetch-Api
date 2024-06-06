export function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            let output = '<h2 class="mb-4">Posts</h2>';
            posts.forEach(post => {
                output += `
                <div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
                `;
            });
            document.getElementById('output').innerHTML = output
        })
        .catch(error => console.log(error))
}

export function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title: title, body: body })
    })
        .then(response => response.json())
        .then(post => {
            let output = `
                <h2 class="mb-4">New Post</h2>
                <div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
            document.getElementById('output-form').innerHTML = output
        })
        .catch(error => console.log(error))
}