// 1

/*
DOM is an abbreviation and it stands for Documnet Object Model
with it we can change html code from javascript file
*/


// 2

/*
document and window is objects in javascript and keydifference between them is that
window is you to control browser window and document is used for html code, page and etc
*/


// 3

/*
querry selector is used to select only one element in the DOM and 
querry selector all is used to select multiple elements
*/


// 4

/*
at first glance you would think innerHTML and innerText is same,
but if you write html code in innerText it will return as full string 

    example:
        let doc = document.getElementbyId('id');
        doc.innerText = "<p> hello world </p>";

        output will be '<p> hello world </p>';


and while using innerhtml it will use as real html code

    example:
        let doc = document.getElementbyId('id');
        doc.innerHTML = "<p> hello world </p>";

        output in div with that id will be "hello world";
*/


// 5  =>  6

let doc = document.getElementById('id');
let newElement = document.newElement('a');

doc.appendChild(newElement);


// 7

doc.remove(newElement);


// 8

// option one:
doc.className('new-class');

doc.classList.add('new-class-with-list');

doc.classList.remove('new-class-with-list');


// 9

doc.style.background = "red";

doc.style.width = '100%';
doc.style.height = '100vh';


// 10

doc.children;
