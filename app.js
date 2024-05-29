//Select and cache the <main> element in a variable named mainEl
const mainEl = document.querySelector('main')
console.log(mainEl)

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.background = "#4a4e4d";

// Set the content of mainEl to <h1>DOM Manipulation</h1>
const new_element = document.createElement("H1")
new_element.innerHTML = "DOM MANIPULATION"
mainEl.appendChild(new_element)

// Add a class of flex-ctr to mainEl
mainEl.classList = "flex-ctr";
