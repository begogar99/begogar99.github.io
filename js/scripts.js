/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    // Toggle for the first abstract
    const toggleTrigger = document.querySelector('.toggle-trigger-1');
    const toggleWrap = document.querySelector('.toggle-wrap-1');

    // Initially hide the toggle wrap
    toggleWrap.style.display = 'none';

    toggleTrigger.addEventListener('click', function() {
        // Toggle visibility
        if (toggleWrap.style.display === 'none' || toggleWrap.style.display === '') {
            toggleWrap.style.display = 'block';
        } else {
            toggleWrap.style.display = 'none';
        }
    });
    
});

document.addEventListener('DOMContentLoaded', function () {
    // Toggle for the first abstract
    const toggleTrigger = document.querySelector('.toggle-trigger-2');
    const toggleWrap = document.querySelector('.toggle-wrap-2');

    // Initially hide the toggle wrap
    toggleWrap.style.display = 'none';

    toggleTrigger.addEventListener('click', function() {
        // Toggle visibility
        if (toggleWrap.style.display === 'none' || toggleWrap.style.display === '') {
            toggleWrap.style.display = 'block';
        } else {
            toggleWrap.style.display = 'none';
        }
    });
    
});

document.addEventListener('DOMContentLoaded', function () {
    // Toggle for the first abstract
    const toggleTrigger = document.querySelector('.toggle-trigger-3');
    const toggleWrap = document.querySelector('.toggle-wrap-3');

    // Initially hide the toggle wrap
    toggleWrap.style.display = 'none';

    toggleTrigger.addEventListener('click', function() {
        // Toggle visibility
        if (toggleWrap.style.display === 'none' || toggleWrap.style.display === '') {
            toggleWrap.style.display = 'block';
        } else {
            toggleWrap.style.display = 'none';
        }
    });
    
});