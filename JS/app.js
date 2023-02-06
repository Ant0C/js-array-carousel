//Prelevare le immagini ed inserirle nel html
let slides = ['./img/01.jpg','./img/02.jpg','./img/03.jpg','./img/04.jpg','./img/05.jpg',]

console.log(slides)

let slideAttiva = 0
const slideElement = document.getElementsByClassName('slide')
console.log(slideElement)

//Prelevare le freccie

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
console.log(arrowRight)

//Al click sulla freccia cambia l'immagine verso destra

arrowLeft.addEventListener('click', function () {
    console.log(slideAttiva)

	let slideCorrente = slideElement[slideAttiva]
	slideCorrente.classList.remove("d-block")

	slideAttiva += 1

	let prossimaSlide = slideElement[slideAttiva]
	prossimaSlide.classList.add("d-block")
})

//Al click sulla freccia cambia l'immagine verso sinistra

arrowRight.addEventListener('click', function () {
    console.log(slideAttiva)

	let slideCorrente = slideElement[slideAttiva]
	slideCorrente.classList.remove("d-block")

	slideAttiva -= 1

	let prossimaSlide = slideElement[slideAttiva]
	prossimaSlide.classList.add("d-block")
})

