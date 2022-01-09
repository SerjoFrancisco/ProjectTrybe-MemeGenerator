const text = document.getElementById('text-input');
const meme = document.getElementById('meme-text');
const imageUp = document.getElementById('meme-insert');
const imageDiv = document.getElementById('meme-image');
const imageContainer = document.getElementById('meme-image-container');
const template = document.getElementsByTagName('img');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

function imageUpload() {
  imageDiv.src = URL.createObjectURL(imageUp.files[0]);
}
function fireUp() {
  imageContainer.style.border = '3px dashed red';
}
function watering() {
  imageContainer.style.border = '5px double blue';
}
function bury() {
  imageContainer.style.border = '6px groove green';
}
function useTemplate() {
  imageDiv.src = event.target.src;
}
function botar() {
  meme.innerText = text.value;
}
text.oninput = botar;
function listenAll() {
  for (let i = 1; i < template.length; i += 1) {
    template[i].addEventListener('click', useTemplate);
  }
}
fire.addEventListener('click', fireUp);
water.addEventListener('click', watering);
earth.addEventListener('click', bury);
imageUp.addEventListener('change', imageUpload);
