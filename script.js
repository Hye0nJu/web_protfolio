"use strict!"

const slides = document.querySelectorAll(".slide")
let counter = 0;
//console.log(slides)

slides.forEach(
    (slides, index) => {
        slides.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

// scrool menu 구현
const spans = document.querySelectorAll("span")
const contents = document.querySelectorAll(".scroll_section")
console.log(contents)
const homeTop = contents[0].offsetTop
const aboutTop = contents[1].offsetTop
const skillTop = contents[2].offsetTop
const projectTop = contents[3].offsetTop

spans[0].onclick = function() {
    window.scroll({top:homeTop, behavior: 'smooth'})
}
spans[1].onclick = function() {
    window.scroll({top:aboutTop-70, behavior: 'smooth'})
}
spans[2].onclick = function() {
    window.scroll({top:skillTop-70, behavior: 'smooth'})
}
spans[3].onclick = function() {
    window.scroll({top:projectTop-70, behavior: 'smooth'})
}