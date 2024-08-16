let addbutton = document.createElement('button');
let body = document.body;

body.appendChild(addbutton);


let list = document.getElementById('list');

for(let i = 0; i < 10; i++){
    let addLi = document.createElement('li');
    addLi.innerText = `${i + 1} Text`;
    list.appendChild(addLi);    
}

function randomNumber(){
    return parseInt(Math.random() * 256);
}

function randomColour(){

    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

let button = document.getElementById('button');

button.addEventListener('click', () => {
    body.style.background = randomColour();
});

let button1 = document.getElementById('button1');
let htmlP = document.getElementById('paragraph');

function randomNumber(a, b){
    return parseInt(Math.random() * (b - a) + a);
}

let arr = ["apple", 'orange', 'pineapple', 'strawberry', 'cherry'];

button1.addEventListener('click', () => {
    htmlP.innerText = arr[randomNumber(0, arr.length)];
});

let button2 = document.getElementById('button2');
let htmlP1 = document.getElementById('paragraph1');

button2.addEventListener('click', () =>{
    
    if(!htmlP1.classList.contains('highlight'))
        htmlP1.classList.add('highlight');
    else
        htmlP1.classList.remove('highlight');

})



