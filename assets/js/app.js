const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

try{//Se añade el try para en caso de la promesa ser exitosa
function displayUser(username) {
  $n.textContent = 'cargando...';
  const response =  fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}
}
catch{//Se añade el catch en caso de que la promesa falle
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}
}
displayUser('stolinski').catch(handleError);