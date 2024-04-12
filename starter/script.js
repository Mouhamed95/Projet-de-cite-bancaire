'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const btnscrollTo = document.querySelector('.btn--scroll-to')
console.log(btnscrollTo)

const section1 = document.querySelector('#section--1')









///////////////////////////////////////
// Modal window



const openModal = function (e) {
  // e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});






//Selection element

console.log(document.documentElement)

console.log(document.head)
console.log(document.body)


const header = document.querySelector('.header')


const section = document.getElementById('section--1')
console.log(section)


const allSection = document.querySelectorAll('.section')
console.log(allSection)

const allButton = document.getElementsByTagName('button')
console.log(allButton)


console.log(document.getElementsByClassName('btn'))

// const message1 = document.createElement('div')
// console.log(message)


//creation et insertion element

// creation de mouvements c'est .insetAdjacentHTML

// const message = document.createElement('div')
// message.classList.add('cookie-message')

// // message.textContent = ' je suis un cuisinier'
// message.innerHTML = 'je suis developpeur full stack <button class="btn btn--close-cookie">Go It</button>'
// //en tete du balise 
// // header.prepend(message)

// //a la fin du balise
// header.append(message)

// //cette methode nous permet d'inserer les elements au debut et a la fin d'un balise
// // header.append(message.cloneNode(true))

// // header.before(message)
// // header.after(message)

// console.log(message)

// //Delete element

// const sup = document.querySelector('.btn--close-cookie')

// sup.addEventListener('click', function () {
//   message.remove()
// })


//Style DOM
// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// console.log(message.style.color)

// console.log(getComputedStyle(message).color)

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'

// document.documentElement.style.setProperty('--color-primary', "orangered")



// //Attribut

// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt)

// console.log(logo.className)

// logo.alt = 'tapha'

// //NO STANDARD
// console.log(logo.design)
// console.log(logo.getAttribute('design'))

// logo.setAttribute('company', 'Bankist')

// console.log(logo.src)
// console.log(logo.getAttribute('src'))


// const link = document.querySelector('.btn--show-modal')

// console.log(link.href)
// console.log(link.getAttribute('href'))

// //DATA attribut
// logo.classList.add('')
// logo.classList.remove('')
// logo.classList.toggle('')
// logo.classList.contains('')




/**-------------------------------------- le site d'application bancaire---------- */

//comment scroller un element





//Button scroller

// btnscrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect()
//   console.log(s1coords)

//   // console.log(e.target.getBoundingClientRect())

//   // console.log('Current scrol (X/Y)', window.pageXOffset, pageXOffset)

//   //scrolling
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset)

//   //methode ancien
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth'
//   // })

//   //ethode recent pour scroller

// section1.scrollIntoView({ behavior: 'smooth' })

// })

//PAGE Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//     console.log(id)
//   })
// })

// 1 Add Event listenner to comon parent element
// 2 Determiner quel element genere cette evenement

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()

  //Macthing Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })

  }


  // console.log(e.target)

})


//Table component

const tabs = document.querySelectorAll('.operations__tab')

const tabsContainer = document.querySelector('.operations__tab-container')

const tabsContent = document.querySelectorAll('.operations__content')


// tabs.forEach(t => t.addEventListener('click', () => console.log('lo')))

//la deleguation d'evenement
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')
  console.log(clicked)


  if (!clicked) return;

  // suppression des conteneurs  de la classe active
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  // le dernier
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  // Actif longlet
  clicked.classList.add('operations__tab--active')

  //Activate content area le premier a faire
  document.querySelector(`.operations__content--${clicked.
    dataset.tab}`).classList.add("operations__content--active")


})

const nav = document.querySelector('.nav')

//Animation du fond de menu

// Refactoring
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    // console.log(e.target)
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    console.log(siblings)

    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}

//Passer l'argument dans la fonction handleHover
nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))


// console.log(nav)



// Fixation du bar de navigateur   
//Sticky navigation Premier exemple

// const initialCoords = section1.getBoundingClientRect()

// console.log(initialCoords)

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY)

//   if (window.scrollY > initialCoords.top) nav
//     .classList.add('sticky')
//   else nav.classList.remove('sticky')

// })


//Sticky navigation Deuxieme exemple

const headerr = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height
// console.log(navHeight)
const stickyNav = function (entries) {
  const [entry] = entries

  if (!entry.isIntersecting) nav
    .classList.add('sticky')
  else nav.classList.remove('sticky')

}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`

})

headerObserver.observe(headerr)





//Revelation Section

//selection de tous les sections
const allSections = document.querySelectorAll('.section')


const revealSection = function (entries, observer) {
  const [entry] = entries


  if (!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  observer.unobserver(entry.target)
}

//Premeir Etape
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
})

allSections.forEach(function (section) {
  sectionObserver.observe(section)
  // section.classList.add('section--hidden')
})



//Lazy loading img

const imgTargets = document.querySelectorAll('img[data-src]')
// console.log(imgTargets)

const loadImg = function (entries, observer) {
  const [entry] = entries
  // console.log(entry)

  if (!entry.isIntersecting) return

  //Remplace src with data-src
  entry.target.src = entry.target.dataset.src



  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserver(entry.target)
}



const imgObserve = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px'
})


imgTargets.forEach(img => imgObserve.observe(img))





//slider

const slides = document.querySelectorAll('.slide')

const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')

let curSlide = 0
const maxSlide = slides.length

// const slider = document.querySelector('.slider')
// slider.style.transform = 'scale(0.4) translateX(-800px)'
// slider.style.overflow = 'visible'


//Remplace par la fonction gotoslide(0)
// slides.forEach((s, i) => (
//   s.style.transform = `translateX(${100 * i}%)`
// ))

const gotoSlide = function (slide) {

  slides.forEach((s, i) => (
    s.style.transform = `translateX(${100 * (i - slide)}%)`
  ))

}
gotoSlide(0)

//Next Slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0
  } else {
    curSlide++
  }
  //Refactoring
  // slides.forEach((s, i) => (
  //   s.style.transform = `translateX(${100 * (i - curSlide)}%)`
  // ))
  gotoSlide(curSlide)
}

//PrevSlide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1
  } else {
    curSlide--
  }


  gotoSlide(curSlide)
}
btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)


document.addEventListener('keydown', function (e) {
  console.log(e)
  if (e.key === 'ArrowLeft') prevSlide()
  e.key === "ArrowRight" && nextSlide()
})









// const btnscrol = document.querySelector('.btn--scroll-to')

// const section2 = document.querySelector('#section--2')

// btnscrol.addEventListener('click', function () {
//   section2.getBoundingClientRect()

// section2.scrollIntoView({ behavior: 'smooth' })
// })




/////////////////////////////////Alert DOM////////////////////////////////////////


// const h1 = document.querySelector('h1')

// h1.addEventListener('mouseenter', function () {
//   alert("Merci d'avoir visiter nos pages")
// })

// const alerte = function (e) {
//   alert("Merci d'avoir visiter nos pages")

//   h1.removeEventListener('mouseenter', alerte)
// }

// h1.addEventListener('mouseenter', alerte)




// const h1 = document.querySelector('h1')


// console.log(h1.querySelectorAll('.highlight'))
// console.log(h1.childNodes)
// console.log(h1.children)

// h1.firstElementChild.style.color = "white"

// h1.lastElementChild.style.color = "red"


// //selection des parents

// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest('.header').style.background = "var(--gradient-secondary)"

// h1.closest('h1').style.background = "var(--gradient-primary)"







