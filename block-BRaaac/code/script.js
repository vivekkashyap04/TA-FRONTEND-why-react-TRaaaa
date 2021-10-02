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
//   createUi(allMovies);
// }
function handleChange(event) {
  console.log(event);
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUi(allMovies, ul);
}

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createUi(movies, root) {
  root.innerHTML = '';
  movies.forEach((movie, i) => {
    let li = elm(
      'li',
      {},
      elm(
        'label',
        {
          for: i,
        },
        movie.name
      ),
      elm(
        'button',
        {
          id: i,
          onclick: handleChange,
        },
        movie.watched ? 'watched' : 'to watch'
      )
    );

    // let li = document.createElement('li');
    // let name = document.createElement('label');
    // name.for = i;
    // name.innerText = movie.name;
    // let button = document.createElement('button');
    // button.id = i;
    // button.innerText = movie.watched ? 'watched' : 'to watch';
    // button.addEventListener('click', handleChange);
    // li.append(name, button);
    root.append(li);
  });
}

createUi(allMovies, ul);
