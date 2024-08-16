function random(a, b){
    return parseInt(Math.random() * (b - a) + a);
}

let maxHeight = -110;
let maxWidth = -110

let minHeight = -695;
let minWidth = -1167;
let button = document.getElementById('btn');
let startButton = document.getElementById('start');
let startDiv = document.getElementById('div');
let endDiv = document.getElementById('end');
// button.style.transform = `translate(${random(minWidth,maxWidth)}%, ${random(minHeight,maxHeight)}%)`;

let clickCount = 0;

button.addEventListener('click', (e) => {
     e.target.style.transform = `translate(${random(minWidth,maxWidth)}%, ${random(minHeight,maxHeight)}%)`
     clickCount++;
})


startButton.addEventListener('click', () =>{
    startDiv.style.display = "none";
    button.style.transform = `translate(-1167%, -400%)`;
    setTimeout(() => {
        button.style.display = "none";
        endDiv.style.display = "flex";
        endDiv.innerHTML = `<h1>DONE!</h1>` +
        `<p>you have clicked ${clickCount} times</p>`;
    }, 10000)
})

let resetButton = document.getElementById(repeat);

resetButton.addEventListener('click', () =>{
    startDiv.style.display = "flex";
    clickCount = 0;
})
