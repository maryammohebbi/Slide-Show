const slideContents = [
    {
        id: 1,
        imgUrl: "./images/g-1.jpg"
    },
    {
        id: 2,
        imgUrl: "./images/g-2.jpg"
    },
    {
        id: 3,
        imgUrl: "./images/g-3.jpg"
    },
    {
        id: 4,
        imgUrl: "./images/g-4.jpg"
    },
    {
        id: 5,
        imgUrl: "./images/g-5.jpg"
    },

]

const prevSlideBtn = document.querySelector("#prev-slide")
const nextSlideBtn = document.querySelector("#next-slide")
const slider = document.querySelector("#slider")
const dotsContainer = document.querySelector("#dots-container")

//events
prevSlideBtn.addEventListener("click", showThePrevSlide);
nextSlideBtn.addEventListener("click", showTheNextSlide);



// functions
let slideIndex = 0;

function currentSlide(){
    return displaySlide(slideIndex)
}

function slideUI(){
    slideContents.forEach((slide) => {
        const slideEl = document.createElement("img");
        slideEl.dataset.id = slide.id;
        slideEl.classList.add("slide", "w-full", "h-[400px]", "object-cover");
        slideEl.src = slide.imgUrl;
        slider.appendChild(slideEl);
      });
}

function displaySlide(slideIndex){
    let slides = document.querySelectorAll(".slide")
    // hide other slides
    slides.forEach(slide => {
        slide.classList.add("hidden")
    });
    // show current slide
    slides[slideIndex].classList.remove("hidden")
}

function showThePrevSlide() {
    if (slideIndex === 0) {
      slideIndex = slideContents.length -1;
    } else {
      slideIndex--;
    }
    currentSlide();
  }
  
  function showTheNextSlide() {
    if (slideIndex === slideContents.length -1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    currentSlide();
  }

  function createDots(){
    const numOfDots = slideContents.length
    for(let i=0 ; i < numOfDots; i++){
       dotsContainer.innerHTML += `<div data-index=${i} class="dot w-4 h-4 rounded-full cursor-pointer bg-slate-400"></div>`
    }
    const dots = document.querySelectorAll(".dot")
    dots.forEach((dot) =>
    dot.addEventListener("click", () => {
        slideIndex = parseInt(dot.dataset.index);
        // console.log(dot.dataset.index)
        dots.forEach(dot => dot.classList.remove("active"))
        dot.classList.add("active")

        currentSlide();
    })
    );


  }

slideUI()
currentSlide()
createDots()