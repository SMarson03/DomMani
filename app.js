//Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector('main');
console.log(mainEl);

// Set the background color of mainEl to the value stored in the 
//--main-bg CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>
const new_element = document.createElement("h1");
new_element.innerHTML = "DOM MANIPULATION";
mainEl.appendChild(new_element);

// Add a class of flex-ctr to mainEl
mainEl.classList.add("flex-ctr");

//Select and cache the <nav id="top-menu"> element in a variable 
//named topMenuEl.
const topMenuEl = document.querySelector('#top-menu');

//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

//Set the background color of topMenuEl to the value stored in the 
//--top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

//Menu data structure
const menuLinks = [
    { text: 'about', href: '/about'},
    { text: 'catalog', href: '/catalog'},
    { text: 'orders', href: '/orders'},
    { text: 'account', href: '/account'},
];

// //Iterate over the entire menuLinks array and for each "link" object:
//Create an <a> element.
menuLinks.forEach((link) => {
    //How an anchor element was created
    const aElement = document.createElement("a");
    
    aElement.href = link.href;
    
    aElement.textContent = link.text;
// //Append the new element to the topMenuEl element.
    topMenuEl.appendChild(aElement);
});
