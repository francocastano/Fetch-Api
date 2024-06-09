export async function getUsers() {
    try {
        let response = await fetch('users.json')
        let users = await response.json()
        let output = '<h2>Users</h2>';
        users.forEach(user => {
            output += `
            <ul class="list-group mb-3">
                <li class="list-group-item">ID: ${user.id}</li>
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Email: ${user.email}</li>
            </ul>
            `;
        });
        document.getElementById('output').innerHTML = output
    } catch (error) {
        console.log(error)
    }
}