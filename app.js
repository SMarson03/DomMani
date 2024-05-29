//Menu data structure
const menuLinks = [
    { text: 'about', href: '/about'},
    { text: 'catalog', href: '/catalog'},
    { text: 'orders', href: '/orders'},
    { text: 'account', href: '/account'},
];

//Iterate over the entire menuLinks array and for each "link" object:
//Create an <a> element.
for(let i = 0; i <= menuLinks.length -1; i++)
for(let j = 0; j <= menuLinks.length -1; j++){
const mlinks = document.createElement('A')
}

//Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector('main')
console.log(mainEl)

// Set the background color of mainEl to the value stored in the 
//--main-bg CSS custom property
mainEl.style.background = "#4a4e4d";

// Set the content of mainEl to <h1>DOM Manipulation</h1>
const new_element = document.createElement("H1")
new_element.innerHTML = "DOM MANIPULATION"
mainEl.appendChild(new_element)

// Add a class of flex-ctr to mainEl
mainEl.classList = "flex-ctr";

//Select and cache the <nav id="top-menu"> element in a variable 
//named topMenuEl.
const topMenuEl = document.querySelector('nav')

//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100vh";

//Set the background color of topMenuEl to the value stored in the 
//--top-menu-bg CSS custom property.
topMenuEl.style.background = "#0e9aa7";

//Add a class of flex-around to topMenuEl.
topMenuEl.classList = "flex-around"
