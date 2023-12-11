const navbar = document.querySelector('#navbar');
const navbarList = document.querySelector('#navbar-list');

navbar.addEventListener('click', (e) => {
  if (navbarList.classList.contains('hidden')) {
    navbarList.classList.remove('hidden');
  } else {
    navbarList.classList.add('hidden');
  }
});