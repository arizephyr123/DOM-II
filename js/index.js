// // Your code goes here
// ## Task 2: Create Unique Event Listeners

// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	* [ x ] `mouseover`
// 	* [ x ] `mouseenter`
// 	* [ x ] `mouseleave`
//  * [ x ] `click`
// 	* [ x ] `resize`
// 	* [ ] `dblclick`
// 	* [ ] `select`
// 	* [ ] `focus`
// 	* [ ] `blur`
// 	* [ ] `scroll`


// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`



// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`



// =============================
// resize
const logo = document.querySelector("header h1");
console.log(logo);

window.addEventListener("resize", e=>{
    logo.textContent = "FUN BUS !!!!!!!!"
    logo.style.backgroundColor = "#00FFFF";
});

///==================
//click
const links = document.querySelectorAll(".nav-link");
console.log(links);

links.forEach(item =>{
    item.addEventListener('click', event =>{
        console.log("link has been clicked");
        item.style.color = '#FF8C00';
        item.style.fontStyle = 'italic';
        item.style.fontWeight = '900';
    })
})
//==============
//
const funBus = document.querySelector(".intro img");
console.log(funBus);


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

//mouseleave
bigBoat.addEventListener('mouseleave', e =>{
    console.log("in mouseenter fx")
    bigBoat.style.transform = 'scale(1)';
    bigBoat.style.transition = 'transform 1s';
});


//=================
const button1 = document.querySelectorAll(".btn")[0];
const button2 = document.querySelectorAll(".btn")[1];
const button3 = document.querySelectorAll(".btn")[2];
console.log(button1);

button1.ondblclick = function(){
    button1.style.backgroundColor = "#00FFFF";;
};

button2.











//===============
const footer = document.querySelector("footer");
console.log(footer);

