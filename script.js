const text = document.getElementById('text-input');
const meme = document.getElementById('meme-text');
const imageUp = document.getElementById('meme-insert');
const imageDiv = document.getElementById('meme-image');
const imageContainer = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

function imageUpload() {
  const imgSource = URL.createObjectURL(imageUp.files[0]);
  imageDiv.src = imgSource;
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
function botar() {
  meme.innerText = text.value;
}
text.oninput = botar;

fire.addEventListener('click', fireUp);
water.addEventListener('click', watering);
earth.addEventListener('click', bury);
imageUp.addEventListener('change', imageUpload);
