let fontSelect = document.getElementById('fontSelect');
let paragraph = document.querySelector('p');

fontSelect.addEventListener('change' , function() {
    let selectedFont=fontSelect.value;
     paragraph.style.fontFamily = selectedFont;
})

let sizeSelect = document.getElementById('sizeSelect');
let paragraphs = document.querySelector('p');

sizeSelect.addEventListener('change', function(){
     let selectedSize=sizeSelect.value;
     paragraphs.style.fontSize = selectedSize;
})