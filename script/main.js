
  // Mobile menu toggle

  const menuToggleBtn = document.getElementById('menu-btn'); // variable name changed to avoid conflict
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });


  // Active button highlighting

  const allLinks = document.querySelectorAll('#menu a, #mobile-menu a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  allLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    
    if (linkPage === currentPage) {
      link.classList.add('btn-active', 'btn-success'); // active button
    } else {
      link.classList.remove('btn-active', 'btn-success'); // deactivate others
    }

    // Mobile: link click hides the menu
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  });





