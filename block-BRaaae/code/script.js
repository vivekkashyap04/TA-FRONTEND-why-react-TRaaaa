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

function handleChange(event) {
  console.log(event);
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUi(allMovies, ul);
}

// function elm(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith('data-')) {
//       element.setAttribute(key, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child === 'object') {
//       element.append(child);
//     }
//     if (typeof child === 'string') {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });
//   return element;
// }

let elm = React.createElement;

function createUi(movies) {
  //   root.innerHTML = '';
  let todo = movies.map((movie, i) => {
    let li = elm(
      'li',
      {},
      elm(
        'label',
        {
          htmlFor: i,
        },
        movie.name
      ),
      elm(
        'button',
        {
          id: i,
          onClick: handleChange,
        },
        movie.watched ? 'watched' : 'to watch'
      )
    );
    return li;
  });
  ReactDOM.render(todo, ul);
}

createUi(allMovies, ul);
