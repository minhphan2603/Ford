const onNavLinkClick = (event) => {
    const noTransition = 'transition: all 0.001s linear;';
    showedMenu = document.querySelector('.nav-left .dropdown-menu.show');
    if (showedMenu !== null && event.target.nextElementSibling !== showedMenu) {
        event.target.nextElementSibling.addEventListener('transitionend', function () {
            event.target.nextElementSibling.removeAttribute('style');
            showedMenu.removeAttribute('style');
        }, { once: true });
        event.target.nextElementSibling.setAttribute('style', noTransition);
        showedMenu.setAttribute('style', noTransition);        
    }    
}

document.querySelectorAll('.navbar .nav-left a.nav-link').forEach(navlink => navlink.onclick = onNavLinkClick);