//?using Promises
const apibody = document.querySelector('.api_body')
const apiUrl = 'https://icanhazdadjoke.com/';

const fetchData = () => {
    const response = fetch(apiUrl, {
        headers: {
            Accept: "application/json",
        },
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        let p = document.createElement('p');
        p.innerText = data.joke;
        let existingP = apibody.querySelector('p');

        if (existingP) {
            apibody.replaceChild(p, existingP);
        } else {
            apibody.appendChild(p);
        }
    })
        .catch((error) => {
            console.log(error);
        })
}
fetchData();

document.getElementById('fetchJoke').addEventListener('click', fetchData);
