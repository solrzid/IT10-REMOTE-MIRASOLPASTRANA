let fontSelect = document.getElementById('fontSelect');
let paragraph = document.querySelector('p');

fontSelect.addEventListener('change' , function() {
    let selectedFont=fontSelect.value;
     paragraph.style.fontFamily = selectedFont;
})
