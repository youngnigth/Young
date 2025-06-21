const toggleMenu = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav');

if (toggleMenu && navMenu) {
  toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}
