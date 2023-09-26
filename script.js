
const progressBar= document.querySelector('.progress_steps-bar');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const circles = document.querySelectorAll('.progress_steps-circle');
progressBar.style.width = '33%';

let counter = 1;

const nextHandler = () => {
    counter ++;

    if( counter >= circles.length) {
        counter = 4;
    }
    console.log(counter);
}

const prvHandler = () => {
    counter --;

    if(counter <=1) {
        counter = 1;
    }
    console.log(counter);
}


nextButton.addEventListener('click', nextHandler);
prevButton.addEventListener('click', prvHandler);

