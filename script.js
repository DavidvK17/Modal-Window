'use strict';

// getting elements
const btns = document.querySelectorAll('button');
const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const closers = document.querySelectorAll('span');

// loop over NodeList
// get index of each btn
// add eventlistener to respective btn
// loop over modals
// when btn with specific i is clicked, corresponding modal is displayed

btns.forEach((btn, i) =>
  btn.addEventListener('click', function() {
    modals[i].classList.add('is--active');
    overlay.classList.add('is--active');

    // Close modal onkeydown esc
    document.onkeydown = e => {
      if (e.key === 'Escape') closeModal();
    };

    // close on clicking x
    closers.forEach(closer => closer.addEventListener('click', closeModal));

    // close on clicking on overlay
    overlay.addEventListener('click', closeModal);

    function closeModal() {
      modals[i].classList.remove('is--active');
      overlay.classList.remove('is--active');
    }
  })
);
