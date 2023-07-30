/*
document.addEventListener("DOMContentLoaded", function (event) {
fetch("https://swapi.dev/api/people/1")
.then(response => response.json())
.then(json =>
      console.log(json.name))
  .catch(error => console.log(error))
}
)

*/
let post = document.getElementById('post');//вывести информацию
let typeNumber = document.getElementById('typeNumber');//ввести номер
let inputSend = document.getElementById('inputSend');
let typeError = document.createElement('span');//сообщение об ошибке

let loader_wrapper = document.querySelector('loader_wrapper');

typeNumber.addEventListener('keyup', () => {
  if (typeNumber.value > 10) {
    post.appendChild(typeError);
    typeError.textContent = 'Введённое число не может быть больше 10';
  } else {
    typeError.textContent = '';
  }
});

async function getInfo(id) {
  try {
    const movieResponse = await fetch (`https://swapi.dev/api/films/${id}/`);
    const movie = await movieResponse.json();

    const characterUrl = movie.characters[0].split('//')[1];
    console.log(movie);
    console.log(movie.characters);
    const characterResponse = await fetch(`https://${characterUrl}`);
    return characterResponse.json();
  } catch (err) {
    console.log('Произошла ошибка', err);
  }
}

getInfo(1).then((profile) => post.textContent = profile.name);