// This file contains JavaScript code that adds interactivity to the webpage.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Example function to change the background color of the body
    const changeBackgroundColor = (color) => {
        document.body.style.backgroundColor = color;
    };

    // Event listener for a button click (assuming a button with id 'changeColorButton' exists in index.html)
    const button = document.getElementById('changeColorButton');
    if (button) {
        button.addEventListener('click', () => {
            changeBackgroundColor('lightblue');
        });
    }
});