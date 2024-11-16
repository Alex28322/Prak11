document.querySelector('.banner-blue__cross').addEventListener('click', function() {
    document.querySelector('.banner-blue').classList.add('active');
});
const textBox = document.querySelector('.intro__text-box');
const hideButton = document.querySelector('.hide');
const openButton = document.querySelector('.open');

// Hide the text and toggle button visibility when "hide" is clicked
hideButton.addEventListener('click', () => {
textBox.style.display = 'none';
hideButton.style.display = 'none';
openButton.style.display = 'inline-block';
});

// Show the text and toggle button visibility when "open" is clicked
openButton.addEventListener('click', () => {
textBox.style.display = 'block';
openButton.style.display = 'none';
hideButton.style.display = 'inline-block';
});