
document.addEventListener("DOMContentLoaded", function (event) {
fetch("https://swapi.dev/api/people/1")
.then(response => response.json())
.then(json =>
      console.log(json.name))
  .catch(error => console.log(error))
}
)