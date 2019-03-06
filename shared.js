const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const closeModalButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

function closeModal() {
  if (modal) {
    modal.classList.remove('open');
  }  
  backdrop.classList.remove('open');  
  // after 200 ms actually set the display
  // to ease-out just as when the animation kicks in.
  setTimeout(() => {  
    backdrop.style.display = 'none';
  }, 200);
  
}

for (const button of selectPlanButtons) {
    button.addEventListener('click', function() {
      // closeModal();
      // modal.className = 'open'; // this will overwrite the classList
      modal.classList.add('open');
      backdrop.style.display = 'block';
      setTimeout(() => {
        backdrop.classList.add('open');        
      }, 10);      
    });
}

backdrop.addEventListener('click', function() {
  mobileNav.classList.remove('open');
  closeModal();
})

if (closeModalButton) {
  closeModalButton.addEventListener('click', closeModal);
}
  
toggleButton.addEventListener('click', function() {  
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
})


ctaButton.addEventListener('animationstart', function (evt) {
  console.log('Animation started', evt)  
})

ctaButton.addEventListener('animationend', function (evt) {
  console.log('Animation end', evt)  
})

ctaButton.addEventListener('animationiteration', function (evt) {
  console.log('Animation iteration', evt)  
})