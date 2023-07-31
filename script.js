let post = document.getElementById('post');//вывести информацию
let typeNumber = document.getElementById('typeNumber');//ввести номер
let inputSend = document.getElementById('inputSend');
let typeError = document.createElement('span');//сообщение об ошибке

let loader_wrapper = document.querySelector('loader_wrapper');//лоадер


const form = document.querySelector('form');
let select = document.getElementById('choose');
let id = typeNumber.value;
let value = select.value;

function selectOption() {
  return value;
}

inputSend.onclick = function getInfo (event) {
  event.preventDefault();
  if (value == 'people') {
    fetch(`https://swapi.dev/api/people/${id}/`)
    .then(response => response.json())
    .then(json =>
      post.textContent = json.name)
      .catch(error => typeError.textContent = 'Произошла ошибка', error)
  }
}

typeNumber.addEventListener('keyup', () => {
  if (typeNumber.value > 10) {
    post.appendChild(typeError);
    typeError.textContent = 'Введённое число не может быть больше 10';
  } else {
    typeError.textContent = '';
  }
});

//inputSend.onclick = function (event) {
  //event.preventDefault();
    //  try {
      //fetch(`https://swapi.dev/api/films/${id}/`)
      //.then(response => response.json())
      //.then(json => post.textContent = json.name)}
    //catch (error) {
   // typeError.textContent = 'Произошла ошибка', error;
   // } finally {
     // fetch(`https://swapi.dev/api/films/${id}/`)
      //.then(response => response.json())
      //.then(json => post.textContent = json.name)
    //}
//};
  
//document.addEventListener("DOMContentLoaded", function (event) {
//fetch("https://swapi.dev/api/people/1")
//.then(response => response.json())
//.then(json =>
 //     post.textContent = json.name)
 // .catch(error => typeError.textContent = 'Произошла ошибка', error)
//})


//async function getInfo(id) {
 // try {
   // const movieResponse = await fetch (`https://swapi.dev/api/films/${id}/`);
    //const movie = await movieResponse.json();

    //const characterUrl = movie.characters[0].split('//')[1];
    //console.log(movie);
    //console.log(movie.characters);
    //const characterResponse = await fetch(`https://${characterUrl}`);
    //return characterResponse.json();
  //} catch (err) {
   // console.log('Произошла ошибка', err);
  //}
//}

//getInfo(1).then((profile) => post.textContent = profile.name);
