const baseURL = 'https://api.nasa.gov/planetary/apod';
const key = 'aADmQI2QQOMjQ5fpRZOa5QQRAeCaCb9xgDQlbJLL';

//fetch(`${baseURL}?api_key=${key}&date=2020-09-17&hd=false/`);
//? always comes first (with api key), followed by & (and other parameters you want to include.)
//fetch returns a promise by default
//.then returns a promise by default
//fetch returns as a function would
//chained together, passing on to the next: first fetch passed to the .then, get json data and pass to the next .then
//promise is the eventual completion or failure of a request
//have fetch request, as long as it goes through and you get information back the promise is going to be resolved and response from API
//is stored within the promise and passed into the .then. You can take the response and jsonify it, return jsonified data

//concise body arrow function, returned by default; if you open up a body you have to implicity state return

// fetch(`${baseURL}?api_key=${key}`)
//     .then(function (response){
//         return response.json();
//     })
// fetch(`${baseURL}?api_key=${key}`)
//     .then((response) => {
//         return response.json();
//     })

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const moreInfoBtn = document.querySelector('.btn');
const modalBody = document.querySelector('.modal-body');
const modalTitle = document.querySelector('.modal-title');


fetch(`${baseURL}?api_key=${key}`)
    .then(response => response.json())
    .then(json => displayImage(json));

function displayImage(spaceObject) {
    console.log(spaceObject);

    let img = document.createElement("img");
    img.className = 'card-img-top';
    img.src = spaceObject.hdurl; //spaceObject['hdurl']; can use if there's spaces in the keys of the object

    let title = document.createElement('h1');
    title.className = 'card-title';
    title.innerText = spaceObject.title; //spaceObject['title'];
    //title.style.fontFamily = 'space-age'; or 
    title.style = 'font-family: space-age;'; //(multiple properties separated by semi-colon';)

    let date = document.createElement('p');
    date.className = 'card-text';
    date.innerText = spaceObject.date;
    date.style.fontFamily = 'kiona-regular';

    let expl = document.createElement('p');
    expl.innerText = spaceObject.explanation;
    expl.style.fontFamily = 'kiona-regular';


    moreInfoBtn.style.fontFamily = 'kiona-regular';

    modalTitle.innerText = spaceObject.title;
    modalTitle.style.fontFamily = 'space-age';

    card.insertBefore(img, cardBody);
    cardBody.insertBefore(title, moreInfoBtn); //order does matter. if title and date were switched they would appear opposite
    cardBody.insertBefore(date, moreInfoBtn);
    modalTitle.appendChild(expl);
}