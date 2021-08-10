function burgerMenu(selector) {

    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = $('body').find('.burger-menu__overlay');

    console.log(button);

    button.on('click', (e) => {

        e.preventDefault();
        toggleMenu();

    });

    links.on('click', () => toggleMenu());

    overlay.on('click', () => toggleMenu());



    function toggleMenu() {

        menu.toggleClass('burger-menu__active');
        overlay.toggleClass('burger-menu__active');
        $('body').toggleClass('overflow');
    }
}


burgerMenu('.burger-menu');
