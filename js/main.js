// Efek mengetik
const txtElement = ['Dayen Manoppo'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector('.efek-ngetik').textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 250);
})();

// Menu navigasi
(() => {
  const arrowBtn = document.querySelector('.menu-btn'),
    navMenu = document.querySelector('.nav-menu'),
    closeNavBtn = navMenu.querySelector('.close-nav-menu');

  arrowBtn.addEventListener('click', showNavMenu);
  closeNavBtn.addEventListener('click', hideNavMenu);

  function showNavMenu() {
    navMenu.classList.add('open');
    bodyScrollingToggle();
  }
  function hideNavMenu() {
    navMenu.classList.remove('open');
    fadeOutEffect();
    bodyScrollingToggle();
  }
  function fadeOutEffect() {
    document.querySelector('.fade-out-effect').classList.add('active');
    setTimeout(() => {
      document.querySelector('.fade-out-effect').classList.remove('active');
    }, 300);
  }

  // Melampirkan penangan acara ke dokumen
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('link-item')) {
      if (event.target.hash !== '') {
        event.preventDefault();
        const hash = event.target.hash;
        // Menonaktifkan bagian yang aktif
        document.querySelector('.section.active').classList.add('hide');
        document.querySelector('.section.active').classList.remove('active');
        // Mengaktifkan bagian baru
        document.querySelector(hash).classList.add('active');
        document.querySelector(hash).classList.remove('hide');
        // Menonaktifkan navigasi
        navMenu.querySelector('.active').classList.add('outer-shadow', 'hover-shadow');
        navMenu.querySelector('.active').classList.remove('active', 'inner-shadow');
        if (navMenu.classList.contains('open')) {
          // Mengaktifkan navigasi baru
          event.target.classList.add('active', 'inner-shadow');
          event.target.classList.remove('outer-shadow', 'hover-shadow');
          // Menyembunyikan menu navigasi
          hideNavMenu();
        } else {
          let navItems = navMenu.querySelectorAll('.link-item');
          navItems.forEach((item) => {
            if (hash === item.hash) {
              item.classList.add('active', 'inner-shadow');
              item.classList.remove('outer-shadow', 'hover-shadow');
            }
          });
          fadeOutEffect();
        }
        window.location.hash = hash;
      }
    }
  });
})();

// Menyembunyikan semua bagian
(() => {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    if (!section.classList.contains('active')) {
      section.classList.add('hide');
    }
  });
})();

function bodyScrollingToggle() {
  document.body.classList.toggle('stop-scrolling');
}
