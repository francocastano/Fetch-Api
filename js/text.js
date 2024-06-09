export async function getText() {
    try {
        let response = await fetch('../sample.txt')
        let text = await response.text()
        document.getElementById('output').innerHTML = text
    } catch(error) {
        console.log(error)
    }
}