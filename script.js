let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let intervalId;

// Show the first slide and dot
slides[0].classList.add('active');
dots[0].classList.add('active');

// Function to show the next slide
function showNextSlide() {
    slides[slideIndex].classList.remove('active');
    dots[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Function to show the previous slide
function showPrevSlide() {
    slides[slideIndex].classList.remove('active');
    dots[slideIndex].classList.remove('active');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Function to start the automatic slideshow
function startSlideshow() {
    intervalId = setInterval(showNextSlide, 3000); // Change slide every 3 seconds
}

// Function to stop the automatic slideshow
function stopSlideshow() {
    clearInterval(intervalId);
}

// Add event listeners to the next and previous buttons
document.querySelector('.next-btn').addEventListener('click', () => {
    stopSlideshow();
    showNextSlide();
    startSlideshow();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    stopSlideshow();
    showPrevSlide();
    startSlideshow();
});

// Add event listeners to the dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlideshow();
        slides[slideIndex].classList.remove('active');
        dots[slideIndex].classList.remove('active');
        slideIndex = index;
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
        startSlideshow();
    });
});

// Start the automatic slideshow
startSlideshow();


        const mmcontainer = document.querySelector('.mcontainer');

        const items = document.querySelectorAll('.mitem');

        const mprevButton = document.getElementById('prev');

        const mnextButton = document.getElementById('next');


        let currentIndex = 0;


        mnextButton.addEventListener('click', () => {

            currentIndex = (currentIndex + 1) % items.length;

            updatemContainer();

        });


        mprevButton.addEventListener('click', () => {

            currentIndex = (currentIndex - 1 + items.length) % items.length;

            updatemContainer();

        });


        function updatemContainer(){

            const newItems = [...items].slice(currentIndex).concat([...items].slice(0, currentIndex));

            mmcontainer.innerHTML = '';

            newItems.forEach(item => {

                mmcontainer.appendChild(item);

            });

        }



