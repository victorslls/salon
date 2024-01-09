/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')
/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')
/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')




for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
    console.log(element);
  })
}


for (const link of links) {
  link.addEventListener('click',  () => {
    nav.classList.remove('show')
  })
}


function changeHeaderWhenScroll() {
  const scrollGreaterThanHeaderHeight = window.scrollY >= navHeight

  scrollGreaterThanHeaderHeight ? header.classList.add('scroll') : header.classList.remove('scroll')
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)


function backToTop() {
  const screenScroll =  window.scrollY >= 560

  screenScroll ? backToTopButton.classList.add('show') : backToTopButton.classList.remove('show')
}

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
 

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
