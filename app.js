// Define Variables

let sliderImages = document.querySelectorAll(".slide");
let right = document.querySelector("#right");
let left = document.querySelector("#left");
let current = 0;

// right arrow --> next Image
right.addEventListener('click', function(){
    if (current === sliderImages.length -1){
        current = -1;
    }
    next();
});
//left arrow --> previous Image
left.addEventListener('click', function(){
    if (current === 0){
        current = sliderImages.length;
    }
    previous();
});

// Next
function next(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
    }
    
// Previous
function previous(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
    }
        

// Reset Function --> Clear all images
function reset(){
    for (let i=0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// Initialize slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

startSlide();
