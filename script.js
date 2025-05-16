// This script demonstrates how to manipulate the DOM using JavaScript
// Function to change the text content of an element    
// when the button is clicked

function changeText() {
    const textElement = document.getElementById('dynamic-text');
    // Check if the element exists before trying to change its text
    if (!textElement) {
        console.error('Element with ID "dynamic-text" not found.');
        return;
    }
   
    textElement.textContent = 'This text was changed dynamically using JavaScript!';
}

// Function to modify CSS styles via JavaScript
function changeStyle() {
    const styleElement = document.getElementById('dynamic-style');
    styleElement.style.color = 'green';
    styleElement.style.backgroundColor = 'lightyellow';
    styleElement.style.fontSize = '28px';
}

// Function to add a new element to the DOM
function addElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new paragraph added dynamically!';
    const section = document.querySelector('section');  // Select the first section element
    section.appendChild(newElement); // Append the new paragraph to this section
}

// Function to remove an element from the DOM
function removeElement() {
    const elementToRemove = document.getElementById('remove-me');
    if (elementToRemove) {
        elementToRemove.remove();
    }
}
