const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //!Se corrige a clase
const $b = document.querySelector('.blog'); //!Se corrige a clase
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); //!Se añade función asíncrona ya que await depende de ello.
  const data = await response.json(); //! Corrección de plantilla
  console.log(data);
  $n.textContent = `${data.name}`; //!Se utilizan backtips
  $b.textContent = `${data.blog}`; //!Se utilizan backtips
  $l.textContent = `${data.location}`; //!Se utilizan backtips
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);

