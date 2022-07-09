const containerExercise1 = document.querySelector("#container");

const paraRedExercise1 = document.createElement('p');
const blueH3Exercise1 = document.createElement('h3');
const divExercise1 = document.createElement('div');

const divH1Exercise1 = document.createElement('h1');
const divPExercise1 = document.createElement('p');


paraRedExercise1.style.color = "red";
paraRedExercise1.textContent = "Hey I'm red!";

blueH3Exercise1.style.color = "blue";
blueH3Exercise1.textContent = "I'm a blue h3!";

divH1Exercise1.textContent = "I'm a div";
divPExercise1.textContent = "ME TOO!";

divExercise1.appendChild(divH1Exercise1);
divExercise1.appendChild(divPExercise1);

containerExercise1.appendChild(paraRedExercise1);
containerExercise1.appendChild(blueH3Exercise1);
containerExercise1.appendChild(divExercise1);
