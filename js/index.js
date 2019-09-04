// // Your code goes here
// ## Task 2: Create Unique Event Listeners

// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	* [ x ] `mouseover`
// 	* [ x ] `mouseenter`
// 	* [ x ] `mouseleave`
//  * [ x ] `click`
// 	* [ x ] `resize`
// 	* [ x ] `mousedown`
// 	* [ x ] `wheel`
// 	* [ x ] `dblclick`
// 	* [ x ] `focus`
// 	* [ x ] `blur`


// 	* [ ] `keydown`

// 	* [ ] `drag / drop`
// 	* [ ] `load`



// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`



// =============================
// resize

const logo = document.querySelector("header h1");
console.log(logo);
const header = document.querySelector("header");
console.log(header);

window.addEventListener("resize", e =>{
    logo.textContent = "FUN BUS !!!!!!!!"
    logo.style.backgroundColor = "#00FFFF";
});

///==================
//click
const links = document.querySelectorAll(".nav-link");
console.log(links);

links.forEach(item =>{
    item.addEventListener('click', event =>{
        //console.log("link has been clicked");
        item.style.color = '#FF8C00';
        item.style.fontStyle = 'italic';
        item.style.fontWeight = '900';
        //event.preventDefault();
    })
})


//double click
const firstLink = document.querySelector(".nav-link");
console.log(firstLink);
firstLink.ondblclick = function(){
    firstLink.style.backgroundColor = "#663399";
}

//preventing propagation
header.onclick = function(){
    header.style.backgroundColor = "#00ff";
}
firstLink.onclick = function(event){
    header.style.backgroundColor = "#c71585";
    event.stopPropagation();
}




//=============================
//onmouseover
const mapImg = document.querySelector(".img-content img");
console.log(mapImg);

mapImg.onmouseover = mouseOver;

function mouseOver(){
    console.log("In mouseOver Fx")
    mapImg.src = "https://images.unsplash.com/photo-1478359900967-91ec0c6edc60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    mapImg.alt = "other fun bus";
}
//=============
//mouseenter
const bigBoat = document.querySelector(".content-destination img");
console.log(bigBoat);
bigBoat.addEventListener('mouseenter', e =>{
    console.log("in mouseenter fx")
    bigBoat.style.transform = 'scale(1.5)';
    bigBoat.style.transition = 'transform 1s';
});

//=====================
//mouseleave
bigBoat.addEventListener('mouseleave', e =>{
    console.log("in mouseenter fx")
    bigBoat.style.transform = 'scale(1)';
    bigBoat.style.transition = 'transform 1s';
});


//=================
//on mousedown
const button2 = document.querySelectorAll(".btn")[1];
button2.onmousedown = function(){
    button2.style.backgroundColor = "#00FFFF";
 }
 

//=================
//onmouseup
const button3 = document.querySelectorAll(".btn")[2];
console.log(button3);

button3.onmouseup = function(){
    button3.style.border = "6px solid #565697";
};

//===============
//onwheel
const footer = document.querySelector("footer");
console.log(footer);

   footer.onwheel = function(){
    footer.style.backgroundColor = "#663399";
}

//=====================
//onblur and onfocus
const input = document.createElement('input');
input.textContent = "type something";
footer.prepend(input);

input.onfocus = function(){
    input.value = "focusing here";
    input.style.backgroundColor = "dodgerblue";
    input.style.color = "white";
}
input.onblur = function(){
    input.value = "focusing away";
    input.style.backgroundColor = "red";
    input.style.color = "white";
}








