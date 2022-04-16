const btn = document.querySelector('.btn');
const btnClear = document.querySelector('.btnClear');
const danceContainer = document.querySelector('.dance-container');

// Create Elements and Add to div danceContainer
const dance = function () {
  console.log('Dance! JCVD! Dance!');
  let newDanceDiv = document.createElement('div');
  newDanceDiv.classList.add('danceDiv');
  let newImage = document.createElement('img');
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let randomImage = `./img/dance${randomNumber}.gif`;
  console.log(randomImage);
  newImage.setAttribute('src', randomImage);
  newDanceDiv.appendChild(newImage);
  danceContainer.appendChild(newDanceDiv);
};

// Remove Populated Dance Images
const clear = function () {
  console.log('heeeyyy');
  while (danceContainer.firstChild) {
    danceContainer.removeChild(danceContainer.firstChild);
  }
};

btn.addEventListener('click', dance);
btnClear.addEventListener('click', clear);
