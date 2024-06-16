//? Using Async & await
const apibody = document.querySelector('.api_body')
const apiUrl = 'https://icanhazdadjoke.com/';

async function fetchData() {
    try {
        const res = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await res.json()
        let p = document.createElement('p');
        p.innerText = data.joke;
        let existingP = apibody.querySelector('p');

        if (existingP) {
            apibody.replaceChild(p, existingP);
        } else {
            apibody.appendChild(p);
        }
    } catch (error) {
        console.log(error)
    }
}

fetchData();
document.getElementById('fetchJoke').addEventListener('click', fetchData);