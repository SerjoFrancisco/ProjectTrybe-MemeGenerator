const text = document.getElementById('text-input');
const insert = document.getElementById('insert-text');
const meme = document.getElementById('meme-text');

function botar() {
  meme.innerText = text.value;
  text.value = '';
}
insert.addEventListener('click', botar);
