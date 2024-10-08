/* eslint-disable */
window.onload = function(){
    // Get DOM Elements
    const modal = document.querySelector('#modal');
    const modalBtn = document.querySelector('#chatBox');
    const closeBtn = document.querySelector('.closeBtn');

    // Events
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

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
