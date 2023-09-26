
const progressBar = document.querySelector('.progress_steps-bar');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const circles = document.querySelectorAll('.progress_steps-circle');


let counter = 1;

const nextHandler = () => {
    counter++;

    if (counter >= circles.length) {
        counter = 4;
        nextButton.classList.add('disabled'); 
    }else {
        prevButton.classList.remove('disabled');
    }
    console.log(counter);
}

const prevHandler = () => {
    counter--;

    if (counter <= 1) {
        counter = 1;
        
            prevButton.classList.add('disabled');      
        
    }else {
       
        nextButton.classList.remove('disabled');
    }
    console.log(counter);
}

const updateCircle = () => {
    circles.forEach((item, index) => {
        if (index + 1 <= counter) {
            item.classList.add('active');
            item.style.backgroundColor = `#5bf3f3`;
        } else if (index + 1 > counter) {
            item.classList.remove('active');
            item.style.backgroundColor = `#e0e0e0`;
        }
    })
}

const updateProgress = () => {
   
        const activeCircles = document.querySelectorAll('.active');
       
        const progressWidth = (activeCircles.length - 1) / (circles.length - 1) * 100;
      
        if (progressWidth <= 100) {
            progressBar.style.width = progressWidth + '%';
            ;
        }
    
}



nextButton.addEventListener('click', nextHandler);
nextButton.addEventListener('click', updateCircle);
nextButton.addEventListener('click', updateProgress);
prevButton.addEventListener('click', prevHandler);
prevButton.addEventListener('click', updateCircle);
prevButton.addEventListener('click', updateProgress);