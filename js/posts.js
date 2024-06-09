export async function getPosts() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await response.json()
        let output = '<h2 class="mb-4">Posts</h2>';
        posts.forEach( post => {
            output += `
            <div class="card card-body mb-3">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `;
        });
        document.getElementById('output').innerHTML = output
    } catch (error) {
        console.log(error)
    }

}

export async function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title: title, body: body })
        })
        let post = await response.json()
        let output = `
            <h2 class="mb-4">New Post</h2>
            <div class="card card-body mb-3">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
        document.getElementById('output-form').innerHTML = output
    } catch (error) {
        console.log(error)
    }
}