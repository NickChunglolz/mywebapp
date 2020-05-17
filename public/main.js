/* eslint-disable */
window.onload = function(){
    // Get DOM Elements
    const modal = document.querySelector('#modal');
    const modalBtn = document.querySelector('#chatBox');
    const closeBtn = document.querySelector('.closeBtn');

    // Events
    if(modalBtn) modalBtn.addEventListener('click', openModal);
    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(modal) window.addEventListener('click', outsideClick);

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

}

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
