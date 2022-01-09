/* Definitions */

const { compileClientWithDependenciesTracked } = require("pug");

// date
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

/* Functions */
function getDate() {
  let d = new Date;
  today.innerHTML = `${days[d.getDay()]} ${d.getDate()}, ${months[d.getMonth()]} ${d.getFullYear()}`
  setTimeout(() => { getDate(); }, 1000);
}

function getClock() {
  let d = new Date;
  let hour = d.getHours();
  let minutes = d.getMinutes();

  hour < 10 ? hour = `0${hour}` : hour;
  minutes < 10 ? minutes = `0${minutes}` : minutes;

  clock.innerHTML = `${hour}:${minutes}`

  setTimeout(() => { getClock(); }, 1000);
}

/* MAIN */

getClock();
getDate();