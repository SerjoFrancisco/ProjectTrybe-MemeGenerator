const text = document.getElementById('text-input');
const meme = document.getElementById('meme-text');
const imageUp = document.getElementById('meme-insert');
const imageDiv = document.getElementById('meme-image');

function imageUpload() {
  const imgSource = URL.createObjectURL(imageUp.files[0]);
  imageDiv.src = imgSource;
}

function botar() {
  meme.innerText = text.value;
}
text.oninput = botar;

imageUp.addEventListener('change', imageUpload);