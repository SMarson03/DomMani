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
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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

const subMenuEl = document.querySelector("#sub-menu")

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = "0";

//Can only use top if we already use a position element

const topMenuElLinks = topMenuEl.querySelectorAll("a")

topMenuEl.addEventListener("click", (event) => {event.preventDefault();
    if(event.target.tagName !== "A") return;
// topMenuElLinks.forEach(link =>{
//     if(link == event.target){link.classList.toggle("active");
// } else{link.classList.remove("action");
// }
// })
const linkText = event.target.textContent.toLowerCase();
const linkObject = menuLinks.find((link) => link.text === linkText);

if(event.target.classList.contains("active")) {
event.target.classList.remove("active");
subMenuEl.style.top = "0";
} else {document.querySelectorAll ("#top-menu a")
.forEach((a) => a.classList.remove("active"));
event.target.classList.add("active");
if(linkObject.subLinks){
    subMenuEl.style.top = "100%";
    buildSubmenu(linkObject.subLinks);
}else{
    subMenuEl.style.top = "0";
}
}
});

function buildSubmenu(sublinks){
    subMenuEl.innerHTML = ""

    sublinks.forEach((link) =>{
        const aElement = document.createElement("a");
        aElement.href = link.ref
        aElement.textContent = link.text
        subMenuEl.appendChild(aElement);
    })
}

subMenuEl.addEventListener("click", (event) => {
    event.preventDefault();

    if(event.target.tagName !== "A") return;

    console.log("Submenu Link clicked", event.target.textContent);

  
})