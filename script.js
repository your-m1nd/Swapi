let post = document.getElementById('post');//вывести информацию
let typeNumber = document.getElementById('typeNumber');//ввести номер
let inputSend = document.getElementById('inputSend');
let typeError = document.createElement('span');//сообщение об ошибке

let loader = document.getElementById('progress');//лоадер

const form = document.querySelector('.form');

let select = document.getElementById('choose');

select.addEventListener('change', function() {  
  let getValue = select.value;
  console.log(getValue);
});

typeNumber.addEventListener('keyup', () => {
  if (typeNumber.value > 10) {
    post.appendChild(typeError);
    typeError.textContent = 'Введённое число не может быть больше 10';
  } else {
    typeError.textContent = '';
};


form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  try {
    fetch(`https://swapi.dev/api/${select.value}/${typeNumber.value}/`)
      .then(response => response.json())
      .then(json => post.textContent = json.name);
      loader.style = 'display: block';
  } catch (error) {
    post.appendChild(typeError);
    typeError.textContent = error.message;
  }  
})}
);


