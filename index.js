let state = 0;

function updateLights() {
  document.getElementById('red').style.background = state === 0 ? 'red' : '#333';
  document.getElementById('yellow').style.background = state === 1 ? 'yellow' : '#333';
  document.getElementById('green').style.background = state === 2 ? 'lime' : '#333';
}

function switchLight() {
  state = (state + 1) % 3;
  updateLights();
}

updateLights();