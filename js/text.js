export function getText() {
    fetch('sample.txt')
        .then(response => response.text())
        .then(text => document.getElementById('output').innerHTML = text)
        .catch(error => console.log(error))
}