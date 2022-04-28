let hamburger = document.getElementById('hamburger');
let menu = document.getElementById('nav-brand__container');

hamburger.addEventListener('click', () => {
    if (menu.style.display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});
