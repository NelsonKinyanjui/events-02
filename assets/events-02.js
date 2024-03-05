const btn = document.querySelector('.btn');

function alertFunction (){
    alert('Hello world!');
}

btn.onclick = alertFunction;


btnUnclick = document.querySelector('.btnUnclick');

btnUnclick.addEventListener('click', alertFunction);