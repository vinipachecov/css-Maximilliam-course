const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const closeModalButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector('.mobile-nav');

function closeModal() {
  if (modal) {
    modal.classList.remove('open');
  }  
  backdrop.classList.remove('open');  
}

for (const button of selectPlanButtons) {
    button.addEventListener('click', function() {
      // closeModal();
      // modal.className = 'open'; // this will overwrite the classList
      modal.classList.add('open');
      backdrop.classList.add('open');
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

