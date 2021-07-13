const nav = document.querySelector('.navbar');
const brand = document.querySelector('.brand');
const innerBrand = document.querySelector('.inner-brand');

const project = document.querySelector('.project-section');

const btnNavbar = document.querySelector('.btn-navbar');
const mainMenu = document.querySelector('.main-menu');

function activeShowMainMenu(){

    function showMainMenu(){
        mainMenu.classList.toggle('active');
        btnNavbar.classList.toggle('active');
    }

    btnNavbar.addEventListener('click', showMainMenu);
}

activeShowMainMenu();

function activeBgNavbar(){

    function changeBgNavbar(){
        if (window.pageYOffset > 50) {
            nav.classList.add('bg-active');
            brand.classList.add('hidden');
            innerBrand.classList.add('up');
        } else {
            nav.classList.remove('bg-active');
            brand.classList.remove('hidden');
            innerBrand.classList.remove('up');
        }
    }
    window.addEventListener('scroll', changeBgNavbar);
}

activeBgNavbar();

function scrollInternalLink() {
    const links = document.querySelectorAll('a[href^="#"]');
  
    function getScrollTopByHref(element) {
      const id = element.getAttribute('href');
      return document.querySelector(id).offsetTop;
    }
  
    function scrollToPosition(to) {
      window.scroll({
        top: to,
        behavior: 'smooth',
      });
    }
  
    function scrollToIdOnClick(event) {
      event.preventDefault();
      const to = getScrollTopByHref(event.currentTarget) - 60;
      scrollToPosition(to);

      mainMenu.classList.remove('active');
      btnNavbar.classList.remove('active');
    }
  
    links.forEach((links, i) => {
      links.addEventListener('click', scrollToIdOnClick);
    });
  }
  
scrollInternalLink();

function activeEffectScroll() {
  function scrollEffect() {
  
      const topScroll = document.querySelectorAll('[data-effect="top"]');
      const fade = document.querySelectorAll('[data-effect="fade"]');
  
      if(topScroll.length){
          function animaScroll() {
              topScroll.forEach((section) => {
                  const sectionTop = section.getBoundingClientRect().top -400;
                  if(sectionTop < 0){
                      section.classList.add('active');
                  } else {
                      section.classList.remove('active');
                  }
              });
          }
  
          animaScroll();
      } 

      if(fade.length){
        function animaScroll() {
            fade.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top -400;
                if(sectionTop < 0){
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        }

        animaScroll();
    }
  }
  
  window.addEventListener('scroll', scrollEffect);
}

activeEffectScroll();