async function getResponse() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let content = await response.json()
    content = (content.splice(0, 5))
    let list = document.querySelector('.posts')

    let key;
    for (key in content) {
        list.innerHTML += `
        <li class="post">
                <h2>${content[key].title}</h2>
                <p>${content[key].body}</p>
            </li>


        `

    }
}
getResponse()