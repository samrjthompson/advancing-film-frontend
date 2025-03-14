document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const burger = document.getElementById('burger-btn');

    // Collapse the navbar (and show burger) when clicking outside of links in the navbar.
    navbar.addEventListener('click', function(event) {
        if (!event.target.closest('li')) {
            if (!navbar.classList.contains('collapsed')) {
                navbar.classList.add('collapsed');
                burger.classList.add('visible');
            }
        }
    });

    // Expand the navbar (and hide burger) when clicking the burger button.
    burger.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling.
        navbar.classList.remove('collapsed');
        burger.classList.remove('visible');
    });
});