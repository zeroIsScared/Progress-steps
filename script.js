
const progressBar = document.querySelector('.progress_steps-bar');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const circles = document.querySelectorAll('.progress_steps-circle');


let counter = 1;

const nextHandler = () => {
    counter++;

    if (counter >= circles.length) {
        counter = 4;
    }
    console.log(counter);
}

const prevHandler = () => {
    counter--;

    if (counter <= 1) {
        counter = 1;
    }
    console.log(counter);
}

const updateCircle = () => {
    circles.forEach((item, index) => {
        if (index + 1 <= counter) {
            item.classList.add('active');
        } else if (index + 1 > counter) {
            item.classList.remove('active');
        }
    })
}

const updateProgress = () => {
    circles.forEach((item, index) => {
        const activeCircles = document.querySelectorAll('.active');
        const progressWidth = (activeCircles.length - 1) / (circles.length - 1) * 100;

        if (progressWidth <= 100) {
            progressBar.style.width = progressWidth + '%';
        }
    })
}



nextButton.addEventListener('click', nextHandler);
nextButton.addEventListener('click', updateCircle);
nextButton.addEventListener('click', updateProgress);
prevButton.addEventListener('click', prevHandler);
prevButton.addEventListener('click', updateCircle);
prevButton.addEventListener('click', updateProgress);
