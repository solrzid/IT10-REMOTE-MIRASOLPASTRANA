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

let colorSelect = document.getElementById('colorSelect');
let paragraphs1 = document.querySelector('p');

colorSelect.addEventListener('change', function(){
     let selectedcolor=colorSelect.value;
     paragraphs.style.color = selectedcolor;
})
