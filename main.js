var toggle_menu = document.getElementById('humberger-menu');
var nav_menu = document.getElementById('nav-menu');

// add event listener to humber ger toggle button
toggle_menu.addEventListener('click', () => {
  toggle_menu.classList.toggle('humberger-animate');
  nav_menu.classList.toggle('show-menu');
})
