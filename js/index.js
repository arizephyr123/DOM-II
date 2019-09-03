// // Your code goes here
// ## Task 2: Create Unique Event Listeners

// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	* [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`
//  * [ x ] `click`

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`
//==========================
//My work below here

const logo = document.querySelector("header h1");
console.log(logo);




//click
const links = document.querySelectorAll(".nav-link");
console.log(links);

links.forEach(item =>{
    item.addEventListener('click', event =>{
        console.log("link has been cliked");
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
//
const footer = document.getElementsByTagName("footer");
console.log(footer);
// footer.addEventListener('dblclick'(item =>{
//     item.style.transform = 'scale(2)';
// }))
