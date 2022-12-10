const right = document.querySelector('.right');
const left = document.querySelector('.left');
const center = document.querySelector('.center');
const textD = document.querySelector('.text');

function fun(text){
    textD.style.justifyContent = text;
};

right.addEventListener('click', function(){
    fun("right");
});

left.addEventListener('click', function(){
    fun("left");
});

center.addEventListener('click', function(){
    fun("center");
});