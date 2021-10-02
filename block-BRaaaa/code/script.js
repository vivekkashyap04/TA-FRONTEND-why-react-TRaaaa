let input = document.querySelector('input');
let ul = document.querySelector('ul');
let allMovies = [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    createUi(allMovies);
    event.target.value = '';
  }
});

function handleDelete(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createUI(allMovies);
}
function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies);
}

function createUi(movies) {
  ul.innerHTML = '';
  movies.forEach((movie, i) => {
    let li = document.createElement('li');
    let name = document.createElement('label');
    name.for = i;
    name.innerText = movie.name;
    let checkbox = document.createElement('input');
    checkbox.type = checkbox;
    checkbox.id = i;
    checkbox.checked = movie.watched;
    checkbox.addEventListener('click', handleChange);
    let close = document.createElement('span');
    close.innerText = 'X';
    close.setAttribute = ('data-id', i);
    close.addEventListener('click', handleDelete);
    li.append(name, checkbox, close);
    ul.append(li);
  });
}

createUi(allMovies);
