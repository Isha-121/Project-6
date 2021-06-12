
const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play=false;
btn.addEventListener('click',()=>{

    if(!play){
        play = true;
        btn.innerHtml = "Guess";
        guess.classList.toggle('hidden');
    }
})