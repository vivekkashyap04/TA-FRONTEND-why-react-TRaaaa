let input = document.querySelector('input');
let ul = document.querySelector('ul');
let allMovies = [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    createUi(allMovies, ul);
    event.target.value = '';
  }
});

// function handleDelete(event) {
//   let id = event.target.dataset.id;
//   allMovies.splice(id, 1);
//   createUI(allMovies);
// }
function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies, ul);
}

function createUi(movies, root) {
  root.innerHTML = '';
  movies.forEach((movie, i) => {
    let li = document.createElement('li');
    let name = document.createElement('label');
    name.for = i;
    name.innerText = movie.name;
    let button = document.createElement('button');
    button.id = i;
    button.innerText = movie.watched ? 'watched' : 'to watch';
    button.addEventListener('click', handleChange);
    li.append(name, button);
    ul.append(li);
  });
}

createUi(allMovies, ul);
