const menuButton = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = !mobileMenu.hasAttribute('hidden');

    if (isOpen) {
      mobileMenu.setAttribute('hidden', '');
    } else {
      mobileMenu.removeAttribute('hidden');
    }

    menuButton.setAttribute('aria-expanded', String(!isOpen));
  });
}