document.querySelector('.banner-blue__cross').addEventListener('click', function() {
    document.querySelector('.banner-blue').classList.add('active');
});
document.querySelectorAll(".productdata__item").forEach(function (item) {
    item.addEventListener("click", function () {
        item.classList.toggle("active");
        document.querySelector(".productdata__arrow-mobile").classList.toggle("active");
        
    });
});

let position = 0;
const line = document.querySelector(".discount__scroll");
const scrollwidth = line.scrollWidth

document.querySelector('.discount__button-right').addEventListener('click', function(){
    position = position + scrollwidth / 4;
    if (position > (3 * scrollwidth) / 4){
        position = 0
    }
    line.style.left = - position + 'px'
});
document.querySelector('.discount__button-left').addEventListener('click', function(){
    position = position - scrollwidth / 4;
    if (position < 0){
        position = (3 * scrollwidth) / 4
    }
    line.style.left = - position + 'px'
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
